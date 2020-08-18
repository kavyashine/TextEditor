function enableEditMode(){
    tf.document.designMode = "On";
}
function execCmd(cmd){
    tf.document.execCommand(cmd, false, null);
    tf.document.execCommand(insertParagraph, false, null);
}
function execCmd(cmd, color){
    tf.document.execCommand(cmd, false, color);
}
function print_text(){
    var text = document.getElementById('tf').contentWindow.document.body.innerHTML;             // get text from the iframe and store it in var text.
    document.getElementById("display-text").innerHTML = text;									// display text in the div.
}	
function change_font(cmd, fontName){
    tf.document.execCommand(cmd, false, fontName);
}

    

