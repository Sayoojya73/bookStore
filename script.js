function register(){
    const userDetails ={
        username : uname.value,
        email : emailid.value,
        pwd : password.value
    }
if(userDetails.username===''|| userDetails.email===''||userDetails.pwd===''){
    alert("Please enter all required information")
}else{
    if(userDetails.username in localStorage){
        alert("username already exists")
    }else{
    localStorage.setItem(userDetails.username,JSON.stringify(userDetails));
    
    
    alert("Registration successfull");
    window.location='./login.html'
}
}
}

function login(){
    const userDetails ={
        username : uname.value,
        pwd : password.value
    }
    if(userDetails.username===''||userDetails.pwd===''){
        alert("Please enter all required information")
    }else{
        if(!(userDetails.username in localStorage)){
            alert("Username not found")
        }else{
            details =JSON.parse(localStorage.getItem(userDetails.username))
            if(details.pwd !== userDetails.pwd){
                alert("Incorrect password")
            }else{
                localStorage.setItem("USERNAME",JSON.stringify(details.username))
                alert("Login successfull");
                window.location='./home.html';
            }
            
        }
    }

}
let admin = JSON.parse(localStorage.getItem("USERNAME"))
console.log(admin);

let welcomemsg = document.getElementById("msg");
    welcomemsg.innerHTML = `<h1>Welcome ${admin}</h1>`;

function logout() {
    localStorage.clear();
    window.location='./login.html'
}
 
function saveBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let price = document.getElementById("price").value;

    if (author === '' || title === '' || price === '') {
        alert("Please enter all the details correctly");
    } else {
        let bookDetails = {
            bookTitle: title,
            bookAuthor: author,
            bookPrice: price
        };

        if(title in localStorage){
            alert("Book already exists")
        }else{
        localStorage.setItem(title, JSON.stringify(bookDetails));

        let booksContainer = document.getElementById("books");
        let bookHTML = `
            <div class="row m-3 p-2 shadow border-1" >
           
                <h5>Title: ${title}</h5>
                <p>Author: ${author}</p>
                <p>Price: ${price}</p><br><br>
            </div>
        `;
        booksContainer.innerHTML += bookHTML;

        alert("Book Details Added Successfully");
    }}

}

function searchBook(){
    let bookName = searchtitle.value;

    if(bookName in localStorage){
        let bookInformation =JSON.parse(localStorage.getItem(bookName))
        let bookdisplay=document.getElementById("bookinfo");
        bookdisplay.innerHTML=`<p>Tite: ${bookInformation.bookTitle}</p>
        <p>Author: ${bookInformation.bookAuthor}</p>
        <p>Price: ${bookInformation.bookPrice}</p>`
    }else{
        alert("Book not found")
    }
}

function displayBooks(){
    let bookDetails = [
        {
        bookTitle: "Harry Potter and the Sorcerer's Stone",
        bookAuthor: "J.K. Rowling",
        bookPrice: 450
        },
        {
        bookTitle: "The Hobbit" ,
        bookAuthor: "J.R.R. Tolkien",
        bookPrice: 480
        },
        {
        bookTitle: "The Catcher in the Rye",
        bookAuthor: "J.D. Salinger",
        bookPrice: 200
        }

    ]
    for(i=0;i<bookDetails.length;i++){
        localStorage.setItem(bookDetails[i].bookTitle, JSON.stringify(bookDetails[i]));
        let booksContainer = document.getElementById("books");
    let bookHTML = `
        <div class="row m-3 p-2 shadow border-1" >
       
            <h5>Title: ${bookDetails[i].bookTitle}</h5>
            <p>Author: ${bookDetails[i].bookAuthor}</p>
            <p>Price: ${bookDetails[i].bookPrice}</p><br><br>
        </div>
    `;
    booksContainer.innerHTML += bookHTML;
    }

   
   

 
}

displayBooks();