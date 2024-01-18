const http = require("http");

const behaviour = (req, res) => {
  console.log(req.method);
  console.log(req.url);
  if (req.url === "/books" && req.method === "GET") {
    res.write("This is the GET Method for books");
    res.end();
  }

  if (req.url === "/books" && req.method === "PUT") {
    res.write("This is the PUT Method for books");
    res.end();
  }

  if (req.url === "/books" && req.method === "DELETE") {
    res.write("This is the DELETE Method for books");
    res.end();
  }

  if (req.url === "/books/author" && req.method === "GET") {
    res.write("This is the GET Method for books and author");
    res.end();
  }

  if (req.url === "/books/author" && req.method === "POST") {
    res.write("This is the POST method for books and author ");
    res.end();
  }

  if (req.url === "/books/author" && req.method === "PUT") {
    res.write("This is the PUT method for books and author");
    res.end();
  }
  res.end();
};
const server = http.createServer(behaviour);

server.listen("8900", null, null, () => {
  console.log("Server is running at port 8900");
});
