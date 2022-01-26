// const express = require("express");
// const app = express();
// // Pour lire ne format Json
// app.use(express.json());

// // Get request
// // app.get("/hello", (req, res) => {
// //   res.send("c bon rah mzyan");
// // });

// // Post request
// // add new Message
// // app.post("/messages", (req, res) => {
// //   //   //   // ici le code pour inserer un user
// //   console.log(req.body);
// //   res.send(req.body);
// // });

// // path param
// // app.get("/messages/:msgId", (req, res) => {
// //   console.log(req.params);
// //   res.send(req.params.msgId);
// // });

// // query param
// // app.get("/messages", (req, res) => {
// //   console.log(req);
// //   res.send(req.query);
// // });

// // Lancer l'application dans le port 5000 et afficher un message
// app.listen(5000, () => console.log("ra l app khedama ya folan fl port", 5000));

const express = require("express");
const app = express();
app.use(express.json());
const messagesRouter = require("./routes/messages.routes");

app.use("/messages", messagesRouter);

app.listen(5000, () => console.log("ra l app khedama ya folan fl port", 5000));
