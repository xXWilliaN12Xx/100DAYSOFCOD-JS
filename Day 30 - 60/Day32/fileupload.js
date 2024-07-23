// Importa a biblioteca 'formidable' para lidar com uploads de arquivos.
let formidable = require("formidable");

// Importa o módulo 'http' para criar um servidor HTTP.
let http = require("http");

// Importa o módulo 'fs' (file system) para manipular arquivos no sistema.
let fs = require("fs");

// Define o diretório onde os arquivos serão salvos.
const uploadDir = "C:/Users/willian/Documents/";

// Cria o diretório de uploads se ele não existir.
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Função para gerar um caminho seguro para salvar o arquivo.
function getSafeFilePath(filename) {
  return uploadDir + filename.replace(/[^a-z0-9_\-\.]/gi, "_");
}

// Cria um servidor HTTP.
http
  .createServer(function (req, res) {
    // Verifica se a URL requisitada é '/fileuploaded'.
    if (req.url == "/fileuploaded") {
      // Cria uma nova instância de um formulário de upload de arquivos.
      let form = new formidable.IncomingForm();

      // Configurações adicionais do form.
      form.uploadDir = uploadDir;
      form.keepExtensions = true;

      // Analisa a requisição para extrair os campos e arquivos enviados.
      form.parse(req, function (err, fields, files) {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.write("Error parsing the form: " + err.message);
          return res.end();
        }

        // Define o caminho antigo do arquivo (onde ele foi salvo temporariamente).
        let oldpath = files.fileupload.filepath;
        // Define um novo caminho seguro para o arquivo.
        let newpath = getSafeFilePath(files.fileupload.originalFilename);

        // Move o arquivo do caminho antigo para o novo caminho.
        fs.rename(oldpath, newpath, function (err) {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Error moving the file: " + err.message);
            return res.end();
          }
          res.write("File uploaded and moved to " + newpath + "!");
          res.end();
        });
      });
    } else {
      // Define o cabeçalho da resposta como HTML.
      res.writeHead(200, { "Content-Type": "text/html" });
      // Escreve o formulário HTML para upload de arquivos.
      res.write(
        '<form action="fileuploaded" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="fileupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      // Encerra a resposta.
      return res.end();
    }
  })
  .listen(8080); // O servidor escuta na porta 8080.