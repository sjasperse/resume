const puppeteer = require('puppeteer');
const htmlSource = process.argv[2];
const pdfOutput = process.argv[3];

console.log(`Generating ${pdfOutput} from ${htmlSource}...`);

(async() => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  await page.goto(`file://${htmlSource}`);
  await page.pdf({
    path: pdfOutput,
    printBackground: 'true',
    format: 'A4',
    margin: {
      top: '20px',
      left: '20px',
      right: '20px',
      bottom: '20px'
    }
  });
  await browser.close();
  console.log(`${pdfOutput} generated`);
})();
