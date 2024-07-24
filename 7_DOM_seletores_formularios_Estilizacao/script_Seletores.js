function demonstrarSeletores(){
    let elementoPorId = document.getElementById('exemploId');
    elementoPorId.style.color = 'blue';
    console.log('Selecionado por ID', elementoPorId);

    let elementosPorClasse = document.querySelectorAll('.exemploClasse');
    elementosPorClasse.forEach(elemento =>
    {
        elemento.style.backgroundColor = 'yellow';
        console.log('Selecionado por CLASSE', elemento);
    });

    let elementosporTag = document.querySelectorAll('p');
    elementosporTag.forEach(elemento =>
    {
        elemento.style.fontWeight = 'bold';
        console.log('Selecionado por Query Selector All', elemento);
    });

    let elementoPorQuery = document.querySelector('.paragrafo');
    elementoPorQuery.style.fontSize = '20px';
    console.log('Selecionado por Query Selector', elementoPorQuery);

    let elementosPorQueryAll = document.querySelectorAll('.paragrafo');
    elementosPorQueryAll.forEach(elemento =>
    {
        elemento.style.textDecoration = 'underline';
        console.log('Selecionado por Query Selector All', elemento);
    });
}