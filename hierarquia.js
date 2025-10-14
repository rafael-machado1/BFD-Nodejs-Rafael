var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Crie uma hierarquia de classes com Animal sendo a classe base e Gato e Pássaro como subclasses.
Implemente métodos especifícos para cada animal*/
var Animal = /** @class */ (function () {
    function Animal(tipoDePelagem, nome, especie, som) {
        this.tipoDePelagem = tipoDePelagem;
        this.nome = nome;
        this.especie = especie;
        this.som = som;
    }
    return Animal;
}());
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(tipoDePelagem, nome, especie, som) {
        return _super.call(this, tipoDePelagem, nome, especie, som) || this;
    }
    Gato.prototype.sonoridade = function () {
        return "O gato faz meow!";
    };
    Gato.prototype.ataque = function () {
        return "O gato arranha";
    };
    return Gato;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro(tipoDePelagem, nome, especie, som) {
        return _super.call(this, tipoDePelagem, nome, especie, som) || this;
    }
    Passaro.prototype.sonoridade = function () {
        return "O pássaro pia";
    };
    Passaro.prototype.voar = function () {
        return "O pássaro voa";
    };
    return Passaro;
}(Animal));
var meuGato = new Gato("Pelo", "Tonho", "Persa", "Mia");
var meuPassaro = new Passaro("Penas", "Tucano", "Calopsita", "Canta");
console.log(meuGato.sonoridade());
console.log(meuGato.ataque());
console.log(meuPassaro.sonoridade());
console.log(meuPassaro.voar());
