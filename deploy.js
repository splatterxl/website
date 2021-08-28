const manifest = require('./blog/manifest.json');
const fs = require('fs');
const { Remarkable } = require('remarkable');
const read = (filename) => fs.readFileSync(filename, 'utf-8');
const c = console.log;
const md = new Remarkable();
const templates = [
  read('./blog/template/header.html'),
  read('./blog/template/footer.html'),
];

c('--- Blog ---\n');

const articles = [];

for (const article in manifest) {
  const data = manifest[article];
  c('=> Processing article "' + article + '"...');
  const file = read('./blog/inject/articles/' + article + '.md');
  const stat = fs.statSync('./blog/inject/articles/' + article + '.md');

  const html = md.render(file);

  const text = `${templates[0]}<h2>${data.title}</h2><br>
    By <b>${
      data.author
    }</b> (<i>Last modified at: ${stat.mtime.toLocaleString()}</i>)
    <br>
    <br>
    ${html}
    ${templates[1]}`;

  fs.writeFileSync('./blog/' + article + '.html', text, 'utf-8');

  articles.push({ path: article, ...data });

  c('==> Done\n');
}

{
  c('=> Processing index file...');

  const text = `<ul>${articles
    .slice(0, 5)
    .map(
      (v) =>
        `<li><b><a href="./${v.path}.html">${v.title}</a></b>: ${v.description}</li>`
    )
    .join('')}</ul>`;

  fs.writeFileSync(
    './blog/index.html',
    templates[0] + md.render(read('./blog/index.md')) + text + templates[1]
  );

  c('==> Done\n');
}

c('Finished!');
