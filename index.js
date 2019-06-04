function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(json => renderBooks(json))
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

// const baseURL = "https://anapioficeandfire.com/api/"

// renderBook = book => {
//   const main = document.querySelector('main')
//   const h2 = document.createElement('h2')
//   h2.innerHTML = `<h2>${book.name}</h2>`
//   main.appendChild(h2)
// }

// renderCharacter = character => {
//   const main = document.querySelector('main')
//   const h2 = document.createElement('h2')
//   h2.innerHTML = `<h2>${character.name}</h2>`
//   main.appendChild(h2)
// }



// fetchBooks(baseURL + "books/3").then(json => {
//   renderBook(json)
// })

// fetchBooks(baseURL + "characters/1031").then(json => {
//   renderCharacter(json)
// })

// fetchBooks(baseURL + "books/").then(json => {
//   json.forEach
// })
