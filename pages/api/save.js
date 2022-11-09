import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false
  }
};

export default (req, res) => {

  if (req.method === "POST") {
		return new Promise((resolve, reject) => {
			const form = new formidable.IncomingForm({ 
				maxFileSize: 25*1024*1024,
				uploadDir: path.join(process.cwd(), `./public/files/`),
				keepExtensions: true,
				multiples: true
			});
			form.on("file", (field, file) => {
				fs.rename(file.filepath, form.uploadDir + "/" + file.originalFilename,() => {
					console.log(`Succesfully renamed to ${form.uploadDir + "/" + file.originalFilename}`);
				});
			});
			form.parse(req, async function (err, fields, files) {
				try {
					// console.log('files', files);
					// let response = await saveFiles(files);
					res.status(201).json({ success:true });
					resolve();
				} catch (error) {
					res.status(201).json({ error, success:false });
					resolve()
				}
			});
		})
	}

	else if (req.method === "GET") {
		return new Promise((resolve, reject) => {
			fs.readdir(`./public/files/`, (err, files) => {
				if (files.includes('.gitignore')) files.splice(files.indexOf('.gitignore'), 1)
				if (err) return res.status(201).json({ error:err, success:false });
				res.status(201).json({ files, success:true });
				resolve()
			})
		})
	}

	else res.status(404).send("Incorrect method");
};
