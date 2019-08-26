
docker run -v "$(pwd)"/src/pdf-generation:/pdf-generation -v "$(pwd)"/dist:/resume alekzonder/puppeteer:1.0.0 node /pdf-generation/index.js /resume/resume.html /resume/resume.pdf