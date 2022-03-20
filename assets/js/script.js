const formulario = document.getElementById("formulario");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");
    console.log(userName.value);
    console.log(userEmail.value);
    alert("Estimad@ " + userName.value + ", formulario enviado, gracias por apoyarnos!")
});