interface Animal{
  tipoDePelagem: string
  nome: string
  especie: string
  som():string
}
class Gato implements Animal{
  tipoDePelagem: string
  nome: string
  especie: string
  som(){ console.log(`O som feito por este animal é `)}
}