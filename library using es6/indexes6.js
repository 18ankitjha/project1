console.log("es6");
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log('adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`;
        tableBody.innerHTML += uiString;


    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;

        }
    }

    show(type, displayMessage) {

        let message = document.getElementById('message');
        let boldText;
        if (type === 'success') {
            boldText = 'Success';
        }
        else {
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}:</strong> ${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
        </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);

    }
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        // let booklist=localStorage.getItem('booklist');
        // if(booklist==NULL){
        //     booksObj=[];
        // }
        // else{
        //     booksObj=JSON.parse(booklist);
        // }
        // let myObj={
        //     bookname:name,
        //     bookauthor:author,
        //     booktype:type
        // }
        // booksObj.push(myObj);
        // localStorage.setItem("booklist", JSON.stringify(booksObj));

        display.clear();
        display.show('success', 'your book successfully added');
    }
    else {
        display.show('danger', 'sorry you cannot add this book');
    }

    e.preventDefault();
}