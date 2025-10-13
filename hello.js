var Carro = /** @class */ (function () {
    function Carro(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    Carro.prototype.exibirDados = function () {
        console.log("O carro \u00E9 ".concat(this.modelo, ", da marca ").concat(this.marca, ", do ano ").concat(this.ano));
    };
    return Carro;
}());
var Carro1 = new Carro("Hb20", "Hyundai", 2020);
Carro1.exibirDados();
