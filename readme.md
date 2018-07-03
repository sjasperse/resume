Resume
=========

[Resume as PDF](dist/resume.pdf)

What kind of a nerd uses JSON/JS/HTML/React/Webpack to generate a PDF resume?

This guy, I guess.

I dunno - I hated having to write a resume, and I didn't want to be fiddling with layouts as I was also having to come up with what to write, so I decided to start by writing all the info I wanted to show in JSON, and bind it to a UI later. I think it worked pretty well for me.

**Todo:**
- Integrate PDF generation into build, which would involve:
    1. Spinning up an HTTP server
    2. Use something like Puppeteer to open and render the site in a browser
    3. Generate PDF
    4. Integrate the above steps into Webpack
