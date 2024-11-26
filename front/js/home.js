function carregarPagina(pagina) {
<<<<<<< HEAD
    const conteudoPrincipal = document.getElementById('conteudoPrincipal');

    const url = `${pagina}.html`
    const script = `${pagina}.js`

    fetch(url)
    .then(response => {
        return response.text();
    })
        .then((html) => {
            conteudoPrincipal.innerHTML = html;
            const scriptNovo = document.createElement('script');
            scriptNovo.src = `../js/${script}`;
            document.body.appendChild(scriptNovo);
        })
}

localStorage.setItem("ipApi","http://10.0.3.227:3000/")
=======
  const conteudoPrincipal = document.getElementById('conteudoPrincipal');

  const url = `${pagina}.html`
  const script = `${pagina}.js`

  fetch(url)
  .then(response => {
      return response.text();
  })
      .then((html) => {
          conteudoPrincipal.innerHTML = html;
          const scriptNovo = document.createElement('script');
          scriptNovo.src = `../js/${script}`;
          document.body.appendChild(scriptNovo);
      })
}


localStorage.setItem("ipApi", "http://10.0.3.228:3000/");
>>>>>>> 1c013276b611b451ea251b768094a0cec1e69c2e
