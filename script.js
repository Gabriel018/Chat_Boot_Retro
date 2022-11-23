const cliente = document.querySelector('txt_cliente')
const op_carrocel = document.querySelector('.op_carrocel')
const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

const DisplayText = document.querySelector('text_operador')

let dmx = 0


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
cliente.addEventListener('keyup',() => renderUserMsg())
   const renderUserMsg = () => {
    const texto  = cliente.value; 
     Rendermsgele(texto);
   }
    
   const Rendermsgele=(txt) => {
    const MensengerEle = document.createElement("div")
    const txtNode = document.createTextNode(txt)
    MensengerEle.classList.add("use-msg")
    MensengerEle.append(txtNode)
    DisplayText.append(MensengerEle)
   }




console.log(document.getElementById('text_operador'))