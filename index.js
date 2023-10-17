const app = require("./app");
const port = process.env.PORT || 4194;

app.listen(port, () => {
  console.log("[+] Tech Hub BD server is running .....");
  console.log(`[+] on http://localhost:${port}/`);
});
