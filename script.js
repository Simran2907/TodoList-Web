function newElement(){
    var li = document.createElement("LI");
    var inputvalue = document.getElementById("myInput").value;
    var t=document.createTextNode(inputvalue);
    li.appendChild(t);
    if(inputvalue ===""){
        alert("you must write something");
    }else{
        document.getElementById("myUl").appendChild(li);
        li.className="list-group-item set";
    }
    document.getElementById("myInput").value =" ";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    li.appendChild(span);
    var c = document.getElementsByClassName("close");
    var i;
    for(i=0;i<c.length;i++){
        c[i].onclick = function(){
        var div =this.parentElement;
        div.style.display = "none";
    }
}



}
