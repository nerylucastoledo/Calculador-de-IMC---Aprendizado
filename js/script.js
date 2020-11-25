/*const mmc = () => {
    const primeiroValor = document.getElementById('primeiroValor')
    const segundoValor = document.getElementById('segundoValor')
    const resultado = document.getElementById('resultado')
    const botao = document.getElementById('botao')
    
    botao.addEventListener('click', function(e) {
        e.preventDefault()
    
        resultado.value = calculaMmc(primeiroValor.value, segundoValor.value)
        primeiroValor.value = ''
        segundoValor.value = ''
    
    })
    
    const calculaMmc = (valorPassadoUm, ValorPassadoDois) => {
        var sobra
        x = valorPassadoUm 
        y = ValorPassadoDois
        while(sobra != 0) {
            sobra = x % y
            x = y
            y = sobra
        }
        return (valorPassadoUm * ValorPassadoDois) / x
    }
}
mmc()*/

const imc = () => {
    const primeiroValor = document.getElementById('altura')
    const segundoValor = document.getElementById('peso')
    const resultado = document.getElementById('resultadoImc')
    const botao = document.getElementById('botaoPeso')
    const ul = document.querySelector('.resultadoImc')
    const li = ul.querySelectorAll('li')
    const arrayDep = Array.from(li)

    botao.addEventListener('click', function(e) {
        e.preventDefault()

        arrayDep.forEach((item) => {
            item.classList.remove('ativoVerde', 'ativoAmarelo', 'ativoVermelho')
        })
    
        resultadoCalculo = calculoImc(primeiroValor.value, segundoValor.value)

        if(resultadoCalculo <= 18.5) {
            arrayDep[0].classList.toggle('ativoVerde')
        } else if(resultadoCalculo > 18.5 && resultadoCalculo < 24.9) {
            arrayDep[1].classList.toggle('ativoVerde')
        } else if(resultadoCalculo > 24.9 && resultadoCalculo < 29.9) {
            arrayDep[2].classList.toggle('ativoAmarelo')
        } else if(resultadoCalculo > 30.0 && resultadoCalculo < 39.9) {
            arrayDep[3].classList.toggle('ativoVermelho')
        } else if(resultadoCalculo > 40) {
            arrayDep[4].classList.toggle('ativoVermelho')
        }

        resultado.value = resultadoCalculo
        primeiroValor.value = ''
        segundoValor.value = ''
        
    })

    const calculoImc = (valorPassadoUm, ValorPassadoDois) => {
        valorPassadoUm = +valorPassadoUm.replace(',', '.')
        return ValorPassadoDois / (valorPassadoUm * valorPassadoUm)
    }
}
imc()