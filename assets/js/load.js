
document.addEventListener('DOMContentLoaded', () => loadPage('home'))

function loadPage(pageName) {
    let url = '../../pages/' + pageName + '.html';

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector('#content').innerHTML = data;
        })
        .catch(err => console.error("Error fetching data: ", err))
}