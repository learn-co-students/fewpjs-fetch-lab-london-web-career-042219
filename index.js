function fetchBooks(bookid) {
  fetch(`https://anapioficeandfire.com/api/books/${bookid}`)
  .then(resp => {
    console.log(resp);
    return resp.json()

  })
  .then(json => {
    console.log(json);
  })

  .catch(error =>  console.log(error));
}




function fetchCharachter(characterid) {
  fetch(`https://anapioficeandfire.com/api/characters/${characterid}`)
  .then(resp => {
    console.log(resp)
    return resp.json()
  })

  .then(json => {
    console.log(json);
  })

  .catch(error =>  console.log(error));
}




function totalpages() {
  fetch(`https://anapioficeandfire.com/api/books`)
  .then(resp => {
    console.log(resp);
    return resp.json()

  })
  .then(json => {
    console.log(json);
  })

  .catch(error =>  console.log(error));



}



function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
