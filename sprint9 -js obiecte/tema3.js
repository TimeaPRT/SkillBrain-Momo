// Create an array of objects where each object describes a book and has properties such as title (a string), author (a string), and isRead (a boolean indicating whether you've read it).



const books = [
    {
        title: "Hobbitul",
        autor: "J.R.R. Tolkien",
        isReaded: true,
    },
    {
        title: "Harry Potter",
        autor: "J.K. Rowling",
        isReaded: false,
    }, 
    {
        title: "Atomic Habits",
        autor: "James Clear",
        isReaded: false,
    }
];

function printBooksStatus (books) {
    for (let book of books) {
        if (book.esteCitita) {
            console.log(`Did you read "${book.title}" the "${book.autor}".`);
        } else {
            console.log(`You have to read "${book.title}" the "${book.autor}".`);
        }
    }
}


printBooksStatus(books);