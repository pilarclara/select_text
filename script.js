document.querySelector("p").addEventListener("mousedown", function(){
    if (document.querySelector("p").querySelectorAll("span").length) {
        while(document.querySelector("p").querySelector("span").firstChild)
            document.querySelector("p").insertBefore(document.querySelector("p").querySelector("span").firstChild, document.querySelector("p").querySelector("span"));
        document.querySelector("p").removeChild(document.querySelector("p").querySelector("span"));
    }
});

document.querySelector("p").addEventListener("mouseup", function(){
    if (window.getSelection().getRangeAt(0).toString().length){
       let element = document.createElement("span");
       window.getSelection().getRangeAt(0).surroundContents(element);
    }
});
