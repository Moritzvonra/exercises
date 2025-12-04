const myLibrary = [];

// create book inventory //

function Book (title, author, pages, readStatus) {
    if (!new.target) {
        throw Error ("Please use `new` operator to create new entry.")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
    }

// add book function //

function addBookToLibrary (title, author, pages, readStatus) {
    const newBook = new Book (title, author, pages, readStatus)
    myLibrary.push (newBook);
    return newBook;
}

const book1 = addBookToLibrary ("Harry Potter 1", "J.K. Rowling", "554", "yes");
const book2 = addBookToLibrary ("Harry Potter 2", "J.K. Rowling", "655", "no");
const book3 = addBookToLibrary ("Harry Potter 3", "J.K. Rowling", "851", "no");

console.log(myLibrary);



// display books //

function displayArrayAsDivs(myLibrary, bookshelf, excludeProps = []) {
    const container = document.getElementById(bookshelf);
    container.innerHTML = ''; // Clear previous content

    myLibrary.forEach((item, index) => {
        // Create a new div for each array element
        const div = document.createElement('div');
        div.className = 'book-item'; 

        const removeButton = document.createElement('button');
        removeButton.class = "removeButton";
        removeButton.id = "removeButton";
        removeButton.textContent = "Remove Book";


        // remove book when remove button is clicked //
        removeButton.addEventListener('click', function () {
            myLibrary.splice(index, 1);
            displayArrayAsDivs(myLibrary, bookshelf, excludeProps);
        });

        // Create buttons in div
        const readStatusDiv = document.createElement("readStatusDiv");
        const readStatusYesLabel = document.createElement ("label");
        const readStatusYesInput = document.createElement("input");
        const readStatusNoLabel = document.createElement ("label");
        const readStatusNoInput = document.createElement("input");
        readStatusDiv.className = "readStatusDiv"
        readStatusDiv.textContent="Read the book:"
        readStatusYesInput.type = "checkbox";
        readStatusYesLabel.id ="checkbox"
        readStatusYesLabel.textContent = "Yes";
        readStatusNoInput.type = "checkbox";
        readStatusNoLabel.id ="checkbox"
        readStatusNoLabel.textContent = "No";

        // change read status with checkbox //

        readStatusYesInput.addEventListener("click", function () {
            myLibrary[index].readStatus ="yes";
            displayArrayAsDivs(myLibrary, bookshelf, excludeProps);
        });

         readStatusNoInput.addEventListener("click", function () {
            myLibrary[index].readStatus ="no";
            displayArrayAsDivs(myLibrary, bookshelf, excludeProps);
        });
       
        // Create a list for properties
        const ul = document.createElement('ul');

        // Loop through each property of the book
        for (const key in item) {
            if (item.hasOwnProperty(key) && !excludeProps.includes(key)) {
                const li = document.createElement('li');
                li.textContent = `${key}: ${item[key]}`;
                li.className = `list-item-${key}`;
                ul.appendChild(li);
                if (item.readStatus === "yes") {
                    readStatusYesInput.checked = "checked"}
                    else {
                        readStatusNoInput.checked = "checked"
                    };
                    }
                }

                // Append content to div, then div to container
                readStatusYesLabel.appendChild(readStatusYesInput);
                readStatusDiv.appendChild(readStatusYesLabel);
                readStatusNoLabel.appendChild(readStatusNoInput);
                readStatusDiv.appendChild(readStatusNoLabel);        
                div.appendChild(ul);
                div.appendChild(readStatusDiv);
                div.appendChild(removeButton);
                container.appendChild(div);

    });

    console.log(myLibrary);
};

displayArrayAsDivs(myLibrary, 'bookshelf', ["id", "readStatus"]);


const addBookClick = document.getElementById("addButton");
const popup = document.getElementById("popup");

// pop-up display function //

function popupDisplay () {
        popup.style.display = "grid";
      };

addBookClick.addEventListener("click", popupDisplay);

const submitClick = document.getElementById("formSubmit");
const cancelClick = document.getElementById("formCancel")
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readStatusInput = document.getElementById("readStatus");

// add book by submitting form //

function submitForm () {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const readStatus = readStatusInput.value;

    addBookToLibrary(title, author, pages, readStatus);
    displayArrayAsDivs(myLibrary, "bookshelf", excludeProps = []);
    popup.style.display = "none";
};

submitClick.addEventListener("click", submitForm);
console.log(myLibrary)

// close form with cancel click //

function closePopup () {
    popup.style.display = "none";
};

cancelClick.addEventListener("click", closePopup);
