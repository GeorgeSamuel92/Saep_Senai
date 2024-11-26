$(document).ready(function () {
<<<<<<< HEAD
    $(document).off('submit', '#formUsuario');
=======
>>>>>>> 1c013276b611b451ea251b768094a0cec1e69c2e
    $(document).on('submit', '#formUsuario', async function (event) {
        event.preventDefault();
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value
        }
        console.log(localStorage.getItem('ipApi'));


        axios.post(`${localStorage.getItem('ipApi')}novoUsuario`, formData)
            .then(response => {
                console.log(response);

                alert('Usuario cadastrado com sucesso');
            }).catch(error => {
                console.log(error);

                alert('Ocorreu um erro');
            })
    })
<<<<<<< HEAD
})
=======
})j
>>>>>>> 1c013276b611b451ea251b768094a0cec1e69c2e
