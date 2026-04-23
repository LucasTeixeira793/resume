const handlebars = require('handlebars');
const fs = require('fs-extra');
const markdownHelper = require('./utils/helpers/markdown');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');
const repoName = require('git-repo-name');
const username = require('git-username');
const buildPdf = require('./utils/pdf.js');

const srcDir = __dirname;
const outputDir = `${__dirname}/../dist`;
const langs = ['pt-BR', 'en'];

fs.emptyDirSync(outputDir);

// Copia os assets uma vez para cada idioma
langs.forEach(lang => {
  const langOutput = `${outputDir}/${lang}`;
  fs.copySync(`${srcDir}/assets`, `${langOutput}/assets`);
});

// Gera os HTMLs e PDFs por idioma
langs.forEach(lang => {
  const templateData = require(`./${lang}/metadata/metadata.js`);
  const templatePath = `${srcDir}/${lang}/templates/index.html`;
  const templateSrc = fs.readFileSync(templatePath, 'utf-8');
  const template = handlebars.compile(templateSrc);
  handlebars.registerHelper('markdown', markdownHelper);

  const langOutput = `${outputDir}/${lang}`;
  const pdfFileName = `CV-Lucas-Teixeira.pdf`;

  const html = template({
    ...templateData,
    baseUrl: `https://${username()}.github.io/${repoName.sync()}/${lang}`,
    pdfFileName,
    updated: dayjs().format('DD/MM/YYYY'),
  });

  fs.ensureDirSync(langOutput);
  fs.writeFileSync(`${langOutput}/index.html`, html);
  buildPdf(`${langOutput}/index.html`, `${langOutput}/${pdfFileName}`);
});

// Gera um index.html na raiz para redirecionar com base no idioma
const redirectHtml = `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <title>Redirect</title>
      <script>
        (function() {
          const urlParams = new URLSearchParams(window.location.search);
          const langParam = urlParams.get('lang');
          const browserLang = navigator.language || 'pt-BR';
          const supported = ['pt-BR', 'en'];

          const finalLang = supported.includes(langParam) ? langParam :
                            supported.includes(browserLang) ? browserLang :
                            'pt-BR';
          
          window.location.href = finalLang;
        })();
      </script>
    </head>
    <body>
      <noscript>
        <p>Você precisa de JavaScript habilitado para continuar.</p>
      </noscript>
    </body>
  </html>
  `;

fs.writeFileSync(`${outputDir}/index.html`, redirectHtml);