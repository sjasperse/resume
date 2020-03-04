# Resume

[Resume as PDF](dist/resume.pdf)

What kind of a nerd uses JSON/JS/HTML/React/Webpack/Docker/Puppeteer to generate a PDF resume?

This guy, I guess.

I dunno - I hated having to write a resume, and I didn't want to be fiddling with layouts as I was also having to come up with what to write, so I decided to start by writing all the info I wanted to show in JSON, and bind it to a UI later. I think it worked pretty well for me.

## How it works

### Step 1: Enter data
All of the information I want to display on my resume is in the [`resume-data.json`](src/resume-data.json) file. 

### Step 2: Appearance
In the [`html-generation`]( src/html-generation/index.js) area, I use react to pull the json data, and render how I want it to look in HTML.

### Step 3: Build
Execute `npm run build`, which performs the following steps:
- First, webpack creates the HTML/JS bundle under `build/`.
- Next, docker fires up, using a Puppeteer image, and runs the output generation script
- The output generation script loads the built webpage in puppeteer, and has puppeteer:
  - Extract the rendered page content, strip out the script tag, and save it as `dist/resume.html`
  - Export the rendered page as `dist/resume.pdf`
