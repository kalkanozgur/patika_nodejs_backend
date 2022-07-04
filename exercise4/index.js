const { writeFile, readFile, unlink } = require("fs");

writeFile(
	"employees.json",
	'{"name": "Employeee 1 Name", "salary": 2000 }',
	(err) => {
		if (err) console.log(err);
		console.log("Veri Eklendi..");
	}
);

readFile("employees.json", "utf-8", (err, data) => {
	if (err) console.log(err);
	console.log(data);
	console.log("Dosya Okundu..");
});

unlink("employees.json", (err) => {
	if (err) console.log(err);
	console.log("employees.json Silindi");
});
