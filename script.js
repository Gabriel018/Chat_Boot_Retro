const cliente = document.getElementById('txt_cliente')
const op_carrocel = document.querySelector('.op_carrocel')
const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

const DisplayText = document.getElementById('text_operador')
const frase = ["Ola seja bem vindo!, vou acompanha-lo durante esta cessao "]
let i = 0
let j = 0
let isDelete = false
let Frase_Completa = []
let dmx = 0

cliente.addEventListener('keyup',function(e){
var valor = cliente.value
console.log(valor)
})


console.log(document.getElementById('txt_cliente').value)
function operador_carrocel(){
    dmx++
    if(dmx > img.length +1 ){
    dmx = 0
     }
        
    imgs.style.transform  = `translateX(${-dmx * 200}px)`
}
   setInterval(operador_carrocel,40)

 console.log(dmx)

function loop () {
   DisplayText.innerHTML = Frase_Completa.join('')
   if (i < frase.length){
    
        if ( !isDelete && j <= frase[i].length){
            Frase_Completa.push(frase[i][j])
            j++ 
        }     
        if ( isDelete && j <= frase[i].length){
            Frase_Completa.pop(frase[i][j])
            j--
        } 
        if ( isDelete && j === 0){
            Frase_Completa = []
            isDelete = false
            i++
        }
        if (i === frase.length){
            i = 0
            
        }

        }
        if ( j == frase[i].length){
           //Apaga texto

        }

    const  time =  100
    setTimeout(loop, time)
}
loop()