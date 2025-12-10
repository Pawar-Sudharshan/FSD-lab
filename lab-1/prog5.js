// Create an object representing a book with title, author, year, and a method to display information.

let num = 5;
const Person ={
    title : "Ego is the enemy",
    author : "Ryan Holiday",
    year : 2016,
    pages : 256,

    display: function(){
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}\nPages: ${this.pages}`);
    }

}

Person.display();