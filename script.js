// recupero i libri dalle API di EPICODE

const getBooks = function () {
  fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
      if (response.ok) {
        // TUTTO OK!
        return response.json()
      } else {
        // 400, 401, 404, 500 etc.
        throw new Error('La fetch non è andata a buon fine')
      }
    })
    .then((books) => {
      console.log('BOOKS', books)
      // ora dobbiamo stampare i libri nella pagina

      books.forEach((book) => {
        // cosa diavolo facciamo ora per OGNI libro?
        // dovremmo creare peer ogni book una card, che sta dentro una col,
        // che poi viene inserita nella row che abbiamo fissato in HTML

        const bookCol = `
            <div class="col">
                <div class="card">
                <img
                    src="${book.img}"
                    class="card-img-top"
                    alt="book"
                />
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">
                    ${book.price}
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        `

        const row = document.getElementById('books-row')
        row.innerHTML = row.innerHTML + bookCol
        // row.innerHTML += bookCol
      })
    })
    .catch((err) => {
      console.log('ERRORE', err)
    })
}

getBooks()
