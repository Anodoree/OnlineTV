function switching() {
    
    var check = document.getElementById("switch").checked;

    if(check == true){
        document.getElementById("mobile").style.left = "calc(100% - 28rem)";
        document.getElementById("mobile").style.zIndex = "-1";
    } else {
        document.getElementById("mobile").style.left = "120%";
    }
}