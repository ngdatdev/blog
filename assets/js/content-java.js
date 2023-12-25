
document.addEventListener('DOMContentLoaded', () => {
    const url = "http://localhost:8080/api/post/course/category_java"
    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(response)
            }
            return response.json();
        })
        .then(data => {
            return dataExtract = data.map(item => {
                return `<div class="element">
                <a href="" class="element_notion">${item}</a>
            </div>`
            })
        })
        .then(dataExtract => {
            let html = document.querySelector('.java .format-list');
                html.innerHTML = dataExtract.join('');
                console.log(dataExtract.join(''))

        
        })
        .catch(error => {
            console.error(error)
        })
})

