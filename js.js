document.getElementById("submitbutton").onclick = function(){

    let username = document.getElementById("username").value;
    let note = document.getElementById("note").value;

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = day + "." + month + "." + year + " (" + username + ") <br>" + note;
    ul.appendChild(li);
}