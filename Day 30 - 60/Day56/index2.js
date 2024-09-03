let nome = "williane";

(function() {
    //Escopo local dento da IIFE
    let nome = "Rafaela";
    console.log("Dentro da IIFE: " + nome) // Saída: "Dentro da IIFE: Rafaela"
})();

console.log("Fora da IIFE: " + nome); // Saída: "Fora da IIFE: williane"