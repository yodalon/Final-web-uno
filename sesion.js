const login = document.getElementById('login-pag');

login.addEventListener ('submit', function (e){
    e.preventDefault();

    const UserIng = document.getElementById('username').value;
    const PassIng = document.getElementById('password').value;

    const Newsusername = localStorage.getItem('username');
    const Newspassword = localStorage.getItem('password');
    console.log (Newsusername);
    console.log (Newspassword);

    if (Newsusername === UserIng && Newspassword === PassIng){
        console.log('Haz iniciado sesion');
        window.location.href = 'home.html';
    } else {
        console.error ('Inicio de sesion ha fallado, verifica tus credenciales')
    }
});

