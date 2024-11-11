function mostrar_esconder(el){
    var display = document.getElementById(el).style.display;
    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }
    else{
        document.getElementById(el).style.display = 'block';
    }
}

function esconder_mostrar(el){
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = 'block';
    }
    else{
        document.getElementById(el).style.display = 'none';
    }
}



