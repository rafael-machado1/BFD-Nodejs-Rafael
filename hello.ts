class Carro123 {
  
  public modelo: string 
  public marca: string
  public ano: number
  
  
  constructor(modelo: string, marca: string, ano: number){
    this.modelo = modelo
    this.marca = marca
    this.ano = ano
  }

  exibirDados(){
   console.log( `O carro é ${this.modelo}, da marca ${this.marca}, do ano ${this.ano}`)
  }
}
const Carro12 = new Carro123("Hb20", "Hyundai", 2020)
Carro12.exibirDados()