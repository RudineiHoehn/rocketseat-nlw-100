const sqlite3 = require("sqlite3").verbose();

//Criar objeto do banco
const db = new sqlite3.Database("./src/database/database.db");

db.serialize(() => {
  /*
  //Criar tabela  
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `);
  */
  /*
  //Inserir dados
  const query = `INSERT INTO places (image, name, address, address2, state, city, items) VALUES (?,?,?,?,?,?,?); `;
  const values = [
    "https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "Colectoria",
    "Guilerme Gembala, Jardim América",
    "Nº 260",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletrônicos, Lâmpadas",
  ];

  const values2 = [
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "Papersider",
    "Guilerme Gembala, Jardim América",
    "Nº 260",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis e Papelão",
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }

    console.log("Cadastrado com sucesso");
    console.log(this);
  }

  db.run(query, values, afterInsertData);
  db.run(query, values2, afterInsertData);
*/
  /*
  //Consultar dados
  const sqlSelect = `SELECT * FROM places`;
  function afterSelectData(err, rows) {
    if (err) {
      return console.log(err);
    }

    console.log("Aqui estão seus registros");
    console.log(rows);
  }
  db.all(sqlSelect, afterSelectData);
*/
  /*
  //Deletar
  const sqlDelete = `DELETE FROM places WHERE id = ?`;
  function afterDeletetData(err) {
    if (err) {
      return console.log(err);
    }

    console.log("Registro deletado com sucesso");
  }
  db.run(sqlDelete, [1], afterDeletetData);
  */
});

module.exports = db;
