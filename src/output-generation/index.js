const puppeteer = require('puppeteer');
const fs = require('fs');

const htmlSource = process.argv[2];
const pdfOutput = process.argv[3];
const htmlOutput = process.argv[4];

console.log(`Generating ${pdfOutput} and ${htmlOutput} from ${htmlSource}...`);

(async() => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  await page.goto(`file://${htmlSource}`);

  // export html
  const html = await page.content();
  const htmlWithoutScriptTag = html.replace(/<script.*<\/script>/, '');
  fs.writeFileSync(htmlOutput, htmlWithoutScriptTag);
  console.log(`${htmlOutput} generated`);

  // export pdf
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
