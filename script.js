const cliente = document.getElementById('txt_cliente')
const op_carrocel = document.querySelector('.op_carrocel')
const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

const DisplayText = document.getElementById('text_operador')

let dmx = 0


const conversa = {Ola:"como Vai"}



console.log(document.getElementById('txt_cliente').value)
function operador_carrocel(){
    dmx++
    if(dmx > img.length +1 ){
    dmx = 0
     }
        
    imgs.style.transform  = `translateX(${-dmx * 200}px)`
}
   setInterval(operador_carrocel,40)




 //Capturar valor digitado na txtarea
cliente.addEventListener('keyup',function(e){
    var valor = cliente.value
    console.log(valor)
    
    if(valor == 'Bom dia'){
        cliente.valor = ''
        setTimeout(function(){
            DisplayText.innerHTML = "Bom dia em que posso ajuda-lo"  
        },1000)
        

    }

    if(valor == 'horas'){
        cliente.valor = ''
        setTimeout(function(){
            DisplayText.innerHTML = "<br>e a hora certa"
        },1000)

    }})

console.log(document.getElementById('text_operador'))