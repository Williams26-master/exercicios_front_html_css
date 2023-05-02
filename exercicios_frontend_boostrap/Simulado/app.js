let div = document.getElementById('cards')


function conteudo() {
    div.innerHTML = ``

    for (let i = 0; i <= dados.length; i++) {
        div.innerHTML += `
        <div class="cards col-lg-4 col-md-4 col-6 mb-3">
            <div class="card m-2">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${dados[i].url}" class="img-fluid rounded-start" alt="...">
                    </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">${dados[i].titulo}</h5>
                            <p class="card-text">${dados[i].descricao}</p>
                            <p class="card-text">Willian Rocha<small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    }
}

conteudo()