const express = require("express");

const server = express();

const db = require("./database/db");

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server.get("/", (req, res) => {
  return res.status(400).render("index.html");
});

server.get("/create-point", (req, res) => {
  return res.status(400).render("create-point.html");
});

server.post("/savepoint", (req, res) => {
  const place = req.body;

  //Inserir dados
  const query = `INSERT INTO places (image, name, address, address2, state, city, items) VALUES (?,?,?,?,?,?,?); `;
  const values = [
    place.image,
    place.name,
    place.address,
    place.address2,
    place.state,
    place.city,
    place.items,
  ];

  function afterInsertData(err) {
    if (err) {
      console.log(err);
      return res.send("Erro no cadastro");
    }

    return res.render("create-point.html", { saved: true });
  }

  db.run(query, values, afterInsertData);
});

server.get("/search", (req, res) => {
  const search = req.query.search;

  if (search == "") {
    return res.status(400).render("search-results.html", { total: 0 });
  }

  const sqlSelect = `SELECT * FROM places WHERE city LIKE '%${search}%'`;

  db.all(sqlSelect, function (err, rows) {
    if (err) {
      return console.log(err);
    }

    const total = rows.length;
    return res
      .status(400)
      .render("search-results.html", { places: rows, total });
  });
});

server.listen(3333);
