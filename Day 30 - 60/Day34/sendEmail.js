// Importa o módulo nodemailer, que facilita o envio de emails em Node.js
let nodemailer = require("nodemailer");

// Cria uma variavel que recebe um objeto transportador (transporter).
// Esse objeto é usado para definir o serviço de email (neste caso, Gmail)
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com", // Substitua pelo seu endereço de email.
    pass: "yourpassword", // Substitua pela senhha do email.
  },
});

// Define as opções do email que será enviado.
// Você pode especificar remetente, destinatário(s), assunto e o corpo do email.
// O corpo do email pode ser em formato de texto simples ('text') ou HTML ('html').
let mailOptions = {
  from: "youremail@gmail.com", // Endereço de email do remetente.
  to: "myfriend@yahoo.com, myotherfriend@yahoo.com", // Destinatários do email
  subject: "Sending Email using Node.js", // Assunto do email.
  text: "That was easy!", // Corpo do email em texto simples.
};

// Usa o método sendMail do transportador (transporter) para enviar o email
// com as opções especificadas (mailOptions).
// A função de callback verifica se houve algum erro no envio do email.
// Se houver um erro, ele será exibido no console. Caso contrário, será exibida
// uma mensagem indicando que o email foi enviado com sucesso.
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error); // Exibe um erro (se houver).
  } else {
    console.log("Email sent: " + info.response); // Exibe uma resposta de sucesso
  }
});
