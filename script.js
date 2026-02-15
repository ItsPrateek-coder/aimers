function login() {
    const pin = document.getElementById("pin").value;
    const studentPin = "IXA";
    const adminPin = "admin.in";

    if (pin === adminPin) {
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html";
    } 
    else if (pin === studentPin) {
        localStorage.setItem("role", "student");
        window.location.href = "student.html";
    } 
    else {
        alert("Invalid Password ❌");
    }
}

function logout() {
    localStorage.removeItem("role");
    window.location.href = "index.html";
}