function login() {
    var form = document.getElementById("loginForm");
    var email = form.elements.namedItem("email").value;
    var psw = form.elements.namedItem("psw").value;
    var get_users = localStorage.getItem("users");
    var obj_users = JSON.parse(get_users);
    var isExist = false;
    for (let i = 0; i < obj_users.length; i++) {
        if (obj_users[i].email == email) {
            isExist = true;
            if (obj_users[i].password != psw) {
                notifyMessage("Wrong Password", "red");
            }
            else {
                localStorage.setItem("currentUser", JSON.stringify(obj_users[i]));
                window.open('./COVID-19.html', "_self");
            }
        }
    }
    if (!isExist) {
        notifyMessage("User dosen't existed!", "red");
    }

}
// ==================Message========================

function notifyMessage(message, color) {
    var message_box = document.createElement("div");
    message_box.style.width = "max-content";
    message_box.style.height = "max-content";
    message_box.style.position = "fixed";
    message_box.style.display = "sticky";
    message_box.style.top = "50px";
    message_box.style.right = "50px";
    message_box.style.borderRadius = "5px";
    message_box.style.boxSizing = "border-box";
    message_box.style.padding = "10px";
    message_box.style.backgroundColor = color;
    message_box.style.boxShadow = "3px 3px WhiteSmoke";
    var text_message = document.createElement("p");
    text_message.style.color = "white";
    text_message.innerHTML = message;
    text_message.style.fontFamily = "Arial, Helvetica, sans-serif";
    message_box.appendChild(text_message);
    document.body.appendChild(message_box);
    message_box.classList.add("message_box");
    setTimeout(() => {
        document.body.removeChild(message_box);
    }, 3000);
}