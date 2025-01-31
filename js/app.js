document.getElementById("loginButton").addEventListener("click", function(event){
    event.preventDefault()
  });
const apiUrlUsuarios='http://localhost:3000/usuarios'

function crearUsuario() {
    const nombre = document.getElementById('nombreUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const password =document.getElementById('passwordUsuario').value;
    const nuevoUsuario = { nombre, email, password };

    fetch(apiUrlUsuarios, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function iniciarLogin() {
    const email = document.getElementById('emailUsuario').value;
    const password =document.getElementById('passwordUsuario').value;
    const nuevoUsuario = {email, password };

    fetch(apiUrlUsuarios+'/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log('respuesta');
       
       if(data?.id){
        window.location='/'
       }

    })
    .catch(error => {
        console.error('Error:', error);
    });
}