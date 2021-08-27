import { Remarkable } from 'https://cdn.jsdelivr.net/npm/remarkable@2/dist/esm/index.browser.js';
const md = new Remarkable();

eruda.init();

const id = decodeURIComponent(location.search.slice(3));

if (!/^\?q=/g.test(location.search) && location.search.length > 1)
  blogErr('Invalid query string');

try {
  fetch(`/blog/inject/articles/${id}.md`)
    .then((res) => {
      if (res.status === 404) {
        blogErr('404', "Sorry, but the requested resource wasn't found... :c");
        return Promise.resolve(false);
      } else {
        return res.text();
      }
    })
    .then((body) => {
      if (!body) return;
      document.getElementById('main').innerHTML = constructArticle(body);
    });

  /**
   * @param {string} body
   */
  function constructArticle(body) {
    return md.render(body);
  }
} catch (e) {
  blogErr(
    'Whoops!',
    'Something went wrong when fetching your resource:\n\n-------\n' +
      e.toString()
  );
}

function blogErr(heading, message) {
  document.querySelector('#main h1').textContent = heading;
  document.querySelector('#main p').textContent = message;
}
