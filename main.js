const booksArr = [
  {
    Title : "lorem ipsum",
    Author : "Testeroo Testyy" 
  },
  {
    Title : "Second Book",
    Author : "Testeroo Testyy" 
  }
]




booksArr.map((item,index) => document
  .getElementById('books').innerHTML += `
  <section class="books-wrapper">
  <table class="book-container"> 
  <tr>
    <td>
     ${item.Title}
       </td>
  </tr>

  <tr>
    <td>${item.Author}</td>    
  </tr>
</table>
<input class='removeButton${index}' type="button" value="Remove">
<hr>
  </section>`);


function loadBooks(title,author){
  document.getElementById('books').innerHTML += `
  <section class="books-wrapper">
  <table class="book-container"> 
  <tr>
    <td>
     ${title}
       </td>
  </tr>

  <tr>
    <td>${author}</td>    
  </tr>
</table>
<input type="button" value="Remove">
<hr>
  </section>`;

}


  function addBooks() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
    const title = document.querySelector('.title').value
    const author = document.querySelector('.author').value
    if(title!='' && author!=''){
      loadBooks(title,author);
    booksArr.push({title,author})
    localStorage.setItem('books', JSON.stringify(booksArr));
    }
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = ''; 
    });
    
  }


//     deleteBooks();
// console.log(booksArr)
  

  function removeBooks() {
   this.bookContainer.addEventListener('click', (e) =>  {
      if(e.target.classList.contains('removeButton${index}')){
        e.target.parentElement.parentElement.remove();
      }
      this.deleteBooks();
    });
  }

  // function removeBooks() { 
  //   const filteredBooksArr = booksArr.filter ((item) => {
  //     return bookArr(0);

  //   }
  // )}

 