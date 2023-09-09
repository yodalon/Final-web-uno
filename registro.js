const registroInicio  = document.getElementById('registroIni');

registroInicio.addEventListener('submit', function (e){
    e.preventDefault();

    const Newusername = document.getElementById('username').value;
    const Newpassword = document.getElementById('password').value;

    localStorage.setItem('usuario', Newusername);
    localStorage.setItem('contraseña', Newpassword);

    console.log('Usuario registrado:', Newusername);

    window.location.href ='sesion.html';
})
