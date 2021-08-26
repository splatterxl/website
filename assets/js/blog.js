const id = decodeURIComponent(location.hash.slice(1));
const md = new Remarkable();

try {
  fetch(`/blog/inject/articles/${id}.md`)
      .then(res => {
        if (res.status === 404) {
          document.querySelector("#main h1").textContent = "Not Found";
          document.querySelector("#main p").textContent =
              "Sorry, but the requested resource wasn't found... :c";
          return Promise.resolve(false);
        } else {
          return res.text();
        }
      })
      .then(body => {
        if (!body)
          return;
        document.getElementById("main").innerHTML = constructArticle(body);
      })

  /**
   * @param {string} body
   */
  function constructArticle(body) { return body; }
} catch (e) {
  document.querySelector("#main h1").textContent = "Oops!";
  document.querySelector("#main p").textContent =
      "Something went wrong when fetching your resource:\n\n-------\n" +
      e.toString();
}
