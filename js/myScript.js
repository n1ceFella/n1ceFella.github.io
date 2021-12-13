

//email validation
window.onload = function(){
    var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d[ ]*$/;
    var form = document.getElementById("hire_form");

    form.onsubmit = function(){
        var post = form.postal.value;
        var hire = form.hidden_hire.value;
        if(regex.test(post) )
        {
            if(parseFloat(hire)!=hire){
                var div =  document.getElementById("hidden_input");
                var text = document.createTextNode(`Please enter numbers only`);
                div.innerHTML = "";
                div.appendChild(text); 
                return false;
            }else return true;
        }
        else{
            var div =  document.getElementById("hidden_input");
            var text = document.createTextNode(`Please enter valid postal code (e.g. A1A 1A1)`);
            div.innerHTML = "";
            div.appendChild(text); 
            return false;
        }
    }
  }



var showComment = function(){
    var hidden_input = document.getElementById("hidden_hire")
    hidden_input.setAttribute("type","hidden");
    var div =  document.getElementById("hidden_input");
    div.innerHTML = "";
    var text = document.createTextNode(`Leave comment`);
    var text_area = document.createElement("textarea");
    text_area.style.borderRadius ="5px";
    text_area.style.border = "1px solid #ccc";
    div.appendChild(text);
    div.appendChild(text_area);
}

var showQuestion = function(){
    var hidden_input = document.getElementById("hidden_hire")
    hidden_input.setAttribute("type","hidden");
    var div =  document.getElementById("hidden_input");
    div.innerHTML = "";
    var text = document.createTextNode(`Have a question?`);
    var text_area = document.createElement("textarea");
    text_area.style.borderRadius ="5px";
    text_area.style.border = "1px solid #ccc";
    div.appendChild(text);
    div.appendChild(text_area);
}
var showHire = function(){
    var div =  document.getElementById("hidden_input");
    div.innerHTML = "";
    var rate = document.createTextNode(`Hour rate $`);
    // var input = document.createElement("input");
    div.appendChild(rate);
    var hidden_input = document.getElementById("hidden_hire")
    hidden_input.setAttribute("type","text");
    // input.setAttribute("id","hire_input");
    // input.setAttribute("name","hire_rate");
    // input.setAttribute("type","number");
    //div.appendChild(input);
}