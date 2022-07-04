const { writeFile, readFile, appendFile, unlink } = require("fs");

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

appendFile(
	"employees.json",
	',{"name": "Employeee 2", "salary": 5000 }',
	(err) => {
		if (err) console.log(err);
		console.log("Veri Güncellendi..");
	}
);

readFile("employees.json", "utf-8", (err, data) => {
	if (err) console.log(err);
	console.log(data);
	console.log("Dosya Okundu..");
});

setTimeout(() => unlink("employees.json", (err) => {
	if (err) console.log(err);
}), 5000)
