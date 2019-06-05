
// this function should include a fetch request to the Game of Thrones API ('https://anapioficeandfire.com/api/books')
//The returned response should be converted to JSON.  
//Then, call the second function, renderBooks()
// passing in the API's returned JSON data as the argument

// write you solution so that fetchBooks() returns the fetch()
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
  
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




