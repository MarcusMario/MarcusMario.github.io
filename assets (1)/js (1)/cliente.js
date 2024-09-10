function saludar(){
    console.log('Diseño web 1')
    //alert('Diseño web 1')
    console.log(document);
    console.log(document.getElementById('parrafo1').innerHTML)
    
    console.log(document.getElementById('parrafo1').getAttribute('style'));
}

function cambiarParrafo2(){
    document.getElementById('parrafo2').innerHTML='HOLA MUNDO'
   
}

function cambiarFondoBody(){
    const colores = ['#FFFFF','#33F57', '#2222FF', '#22FF11', '#FF2222'];
    const colorAlea = colores[Math.floor(Math.random() * 5)];
    console.log(colorAlea);
    document.getElementById('cuerpo').style.backgroundColor = colorAlea;
}