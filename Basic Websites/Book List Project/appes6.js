class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI {
    addBooktoList(book) {
        const list = document.getElementById('book-list');
        //Create tr element
        const row = document.createElement('tr');
        //Insert Cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class ="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    ShowAlert(message, className) {
        //create div
        const div = document.createElement('div');
        //Add Classes
        div.className = `alert ${className}`;
        //Add Text
        div.appendChild(document.createTextNode(message));
        //Get Parent and Insert Before it
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        //Insert Alert
        container.insertBefore(div, form); // Insert Div just before Form

        //Time out after 3 Sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000)
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = ' ';
        document.getElementById('author').value = ' ';
        document.getElementById('isbn').value = ' ';
    }
}


//Create the Event Listeners
// Event Listener for Add Book
document.getElementById("book-form").addEventListener('submit',
    function (e) {
        console.log('test');
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        //Create an Instance of the Book
        const book = new Book(title, author, isbn);

        //Instantiate UI
        const ui = new UI();

        //validate 
        if (title === '' || author === '' || isbn === '') {
            ui.showAlert('Please Fill the Blanks', 'error'); // We Have Created error css
        } else {
            //Add Book to the List
            ui.addBookToList(book);

            //Show Success
            ui.showAlert("Bool Added!", 'success');

            //Clear the UI
            ui.clearFields();
        }
        e.preventDefault();
    });


//Event Listener For Delete.
document.getElementById('book-list').addEventListener('click',
    function (e) {


        const ui = new UI();
        ui.deleteBook(e.target);

        //Show message
        ui.showAlert("Book Removed", 'success');


        e.preventDefault();
    });