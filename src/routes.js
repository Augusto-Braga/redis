const pool = require("./config");

class Routes {
  async registerRoute(req, res) {
    const newUser = req.body;

    try {
      await pool.query(
        `INSERT INTO users(username, email, password) VALUES('${newUser.username}', '${newUser.email}', '${newUser.password}')`
      );

      console.log(newUser);

      res.json("OK");
    } catch (e) {
      if (e.code == "23505") return res.status(400).json("Email já existente");
    }
  }

  async showUsers(req, res) {
    const allUsers = await pool.query("SELECT * FROM users");

    res.json(allUsers.rows);
  }

  async testOk(req, res) {
    res.json("ok");
  }
}

const routes = new Routes();

module.exports = routes;
