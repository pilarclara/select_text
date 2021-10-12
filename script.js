document.querySelector("p").addEventListener("mousedown", function(){
    if (document.querySelector("p").querySelectorAll("span").length) {
        document.querySelector("p").insertBefore(document.querySelector("p").querySelector("span").firstChild, document.querySelector("p").querySelector("span"));
        document.querySelector("p").removeChild(document.querySelector("p").querySelector("span"));
        let cadena = "";
        document.querySelector("p").childNodes.forEach(function(e){cadena+= e.textContent})
        document.querySelector("p").innerText = cadena;
    }
});

document.querySelector("p").addEventListener("mouseup", function(){
    if (window.getSelection().getRangeAt(0).toString().length)
       window.getSelection().getRangeAt(0).surroundContents(document.createElement("span"));
});
