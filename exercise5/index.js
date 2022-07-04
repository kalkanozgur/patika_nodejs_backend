const http = require("http");

const server = http.createServer((req, res) => {
	const url = req.url;
	if (url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>Ana sayfaya hos geldiniz</h1>");
	} else if (url === "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>Hakkinda sayfasina hos geldiniz</h1>");
	} else if (url === "/contact") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>Iletisim sayfasina hos geldiniz</h1>");
	} else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.write("<h1>404 SAYFA BULUNAMADI</h1>");
	}
	res.end();
});

const port = 5000;
server.listen(port, () => {
	console.log(`Sunucu port ${port} de başlatıldı`);
	console.log("http://127.0.0.1:5000/");
	console.log("http://127.0.0.1:5000/about");
	console.log("http://127.0.0.1:5000/contact");
});
