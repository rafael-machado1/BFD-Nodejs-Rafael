/*Faça um programa que simule um televisor criando-o como um objeto:
O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume.
Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.*/

class televisor {
  numCanal: number
  volumeAtual: number

  constructor(numCanal: number, volumeAtual: number){
  this.numCanal = numCanal
  this.volumeAtual = volumeAtual
  }
  
  mudarCanal(a: number){
    if(a < 0 || a >= 50){
      console.log("Digite um canal válido")
    } else {
      console.log(`O canal escolhido foi ${a}`)
    }
  }
  
  aumVolume(a: number){
    if(a + this.volumeAtual > 100){
      console.log("O volume máximo é 100, tente novamente com um valor menor")
    } else if (a + this.volumeAtual < 0){
      console.log("O volume mínimo é 0 (mudo), tente novamente com um valor maior")
    } else {
      console.log(`O volume atual é de ${a + this.volumeAtual}`)
    }
  }

  dimVolume(a: number){
    if(this.volumeAtual - a < 0){
      console.log("O volume mínimo é 0 (mudo), tente novamente")
    } else {
      console.log(`O volume atual é de ${this.volumeAtual - a}`)
    }
  }
}

const televisor1 = new televisor(4, 15)
televisor1.mudarCanal(40)
televisor1.aumVolume(15)
televisor1.dimVolume(20)