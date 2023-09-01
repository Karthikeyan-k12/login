const jsonServer = required("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

server.use(jsonServer.bodyParser);

server.post("/register"),
  (req, res) => {
    const userData = req.body;
    const db = router.db;
    db.get("users").push(userData).write();
    res.json(userData);
  };

server.post("/login", (req, res) => {
  const { email, password } = req.body;
  const db = router.db;
  const users = db.get("users").value();
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: "Login failed" });
  }
});
server.use(middlewares);
server.use(router);

const port = 5000;
server.listen(port , () => {
    console.log(`JSON Server is running on port ${port}`);
});
