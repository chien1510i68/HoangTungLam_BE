class NewsController {
  index(req, res) {
    res.render("news");
  }
  //   [GET]: /news/:slug
  show(req, res) {
    res.render("");
  }
}

module.exports = new NewsController();
