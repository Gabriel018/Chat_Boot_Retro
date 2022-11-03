const cliente = document.getElementById('txt_cliente')
const op_carrocel = document.querySelector('.op_carrocel')
const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

const DisplayText = document.getElementById('text_operador')
const frase = ["Ola seja bem vindo!, vou acompanha-lo durante esta cessao "]
const frase1 = ["<br> Boa noite!! "]
let i = 0
let j = 0
let isDelete = false
let Frase_Completa = []

let dmx = 0

function deletar(){
   
}
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
            Frase_Completa = [ "Boa noite"]
            loop01()
        }


    const  time =  isDelete ? 100:100
    setTimeout(loop, time)
    
}
loop()

function loop01 () {
    DisplayText.innerHTML = Frase_Completa.join('')
    if (i < frase1.length){
     
         if ( !isDelete && j <= frase1[i].length){
             Frase_Completa.push(frase1[i][j])
             j++ 
         }     
         if ( isDelete && j <= frase1[i].length){
             Frase_Completa.pop(frase1[i][j])
             j--
         } 
         if ( isDelete && j === 0){
             Frase_Completa = []
             isDelete = false
             i++
         }
         if (i === frase1.length){
             i = 0
             
         }
 
         }
         if ( j == frase1[i].length){

            isDelete = true
 
         }
 
     const  time =  isDelete ? 100:200
     setTimeout(loop01, time)
 }

 //Capturar valor digitado na txtarea
cliente.addEventListener('keyup',function(e){
    var valor = cliente.value
    console.log(valor)
    
    if(valor == 'oi'){
        

        Frase_Completa = [ "Boa noite"]
           
    }
    
    })
