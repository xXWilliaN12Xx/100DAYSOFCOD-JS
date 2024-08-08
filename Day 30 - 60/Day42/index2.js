function returnHour(data) {
  // Verifica se o argumento 'data' foi passado e se ele não é uma instância de Date
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date."); // Lança um erro se o tipo for inválido
  }

  // Se 'data' não foi fornecida, cria uma nova instância de Date para a data e hora atuais
  if (!data) {
    data = new Date();
  }

  // Retorna a hora formatada em 'pt-BR' no formato de 24 horas
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit", // Exibe as horas com dois dígitos
    minute: "2-digit", // Exibe os minutos com dois dígitos
    second: "2-digit", // Exibe os segundos com dois dígitos
    hour12: false, // Usa o formato de 24 horas
  });
}

try {
  const data = new Date("01-01-1980 16:58:12"); // Cria uma instância de Date para uma data específica
  const hora = returnHour(data); // Chama a função com a data criada
  console.log(hora); // Exibe a hora no console
} catch (e) {
  console.error("Erro:", e.message); // Captura e exibe o erro, se ocorrer
} finally {
  console.log("Tenha um ótimo dia."); // Esta mensagem sempre será exibida
};