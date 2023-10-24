
var login = localStorage.getItem('login');
if (login=="true"){
    var profilePhoto = document.getElementById('profile-photo');
    profilePhoto.src = 'images/afzal.jpg';
    // Get the element with the id "logout"
    var logoutElement = document.getElementById("logout");
    // Create an "i" element
    var iElement = document.createElement("i");
    // Add a class to the "i" element
    iElement.className = "fas fa-sign-out";
    // Add an inline style to the "i" element
    iElement.style.cssText = "color: #0d0d0d;";
    // Add an onclick attribute to the "i" element
    iElement.setAttribute("onclick", "logout()");
    // Append the "i" element to the "logout" element
    logoutElement.appendChild(iElement);


}
else if(login=="false"){
    var profilePhoto = document.getElementById('profile-photo');
    profilePhoto.src = 'images/profile.png';
}
function logout(){
    var login = "false";
    localStorage.setItem('login', login);
    window.location.href='index.html';
}

//Java Script of Login Page
function log() {
    var usernameInput = document.getElementById("uname").value;
    var passwordInput = document.getElementById("pass").value;

    // Retrieve the user data from localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if there are registered users
    if (users.length === 0) {
        alert('No registered users found. Please register first.');
    } else {
        // Loop through the stored users and check for a matching username and password
        var authenticatedUser = users.find(function(user) {
            return user.username === usernameInput && user.password === passwordInput;
        });

        if (authenticatedUser) {
            var login = "true";
            localStorage.setItem('login', login);
            alert('Login successful');
            window.location.href="my-courses.html"
            // You can add code to redirect to a different page or perform other actions here
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    }
    
}

//Java Script for forget password page
 function retrievePassword() {
    var emailInput = document.getElementById("email").value;
    var users = JSON.parse(localStorage.getItem('users')) || [];

    
    var user = users.find(function(user) {
        return user.email === emailInput;
    });

    if (users.length === 0) {
        alert('No registered users found. Please register first.');
    }
    if (user) {
            // Password found, display it
            document.getElementById("password-display").value =+ user.password;
        }
    else {
            // Email not found, display an error message
            document.getElementById("password-display").value = "Email not found.";
        }
    }

// Java Script for Registration page 
 // Function to store values in localStorage
function register() {
    // Get values from input fields
    var email = document.getElementById("remail").value;
    var username = document.getElementById("runame").value;
    var password = document.getElementById("enpass").value;
    var confirmPassword = document.getElementById("rrpass").value;

    // Check if email, username, and password are not empty
    if (email && username && password) {
        if (password === confirmPassword) {
            // Retrieve existing user data from localStorage or initialize an empty array
            var users = JSON.parse(localStorage.getItem('users')) || [];

            // Create a new user object
            var newUser = {
                email: email,
                username: username,
                password: password
            };

            // Push the new user object to the array
            users.push(newUser);

            // Store the updated array in localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Optionally, you can display a success message or redirect the user
            alert('Registration successful');
            window.location.href="login.html";
        } else {
            // Password and confirm password do not match
            alert('Password and confirm password do not match');
        }
    } else {
        // Handle case when fields are empty
        alert('Please fill in all fields');
    }


}


//Java Script of Navigation Bar

const header=document.querySelector("header");
window.addEventListener("scroll",function(){
header.classList.toggle("sticky",window.scrollY > 0);
});

let menu=document.querySelector(".ham");
let navbar=document.querySelector(".navbar");

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}


//Java Script of Home Page


function buy(){
    var login = localStorage.getItem('login');
    if (login=="true"){
        window.location.href='cart.html';
    }
    else{
        alert("Login First");
        window.location.href='login.html';
    }
}

// if (login){
//     window.onload=function() {
//     let img = document.createElement('img');
//     img.src ='images/afzal.jpg';
//     document.getElementById('profile').appendChild(img);
// }
// }
// else{
//     window.onload=function() {
//         let img = document.createElement('img');
//         img.src =
//     'images/profile.png';
//         document.getElementById('profile').appendChild(img);
//     }
// }


// JavaScript of My Course Page

let Show_More=0;
function ShowMore(){
    if(Show_More==0){
    for(let j=0;j<3;j++){
        // Create the inner row div
        const courseRow = document.createElement('div');
        courseRow.classList.add('row');
        const courseImage = document.createElement('img');
        const courseText = document.createElement('div');
        courseText.classList.add('course-text');
        const coursePrice = document.createElement('h5');
        const courseTitle = document.createElement('h3');
        const courseDuration = document.createElement('h6');
        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('rating');
        const starIcons = document.createElement('div');
        starIcons.classList.add('star');
        const reviewCount = document.createElement('div');
        reviewCount.classList.add('review');
        const reviewText = document.createElement('p');

        if(j==0){
        courseImage.src = 'images/phplogo.jpg';
        courseImage.alt = '';
        coursePrice.textContent = '$25.00';
        courseTitle.textContent = 'The PHP Course';
        courseDuration.textContent = ' 9 hours 00 minutes';
        reviewText.textContent = '{20k Review}';
        }
        else if (j==1){
            courseImage.src = 'images/python.png';
            courseImage.alt = '';
            coursePrice.textContent = '$20.00';
            courseTitle.textContent = 'The Python-Basics Course';
            courseDuration.textContent = ' 7 hours 00 minutes';
            reviewText.textContent = '{50k Review}';
        }
        else if (j==2){
            courseImage.src = 'images/mysql.jpg';
            courseImage.alt = '';
            coursePrice.textContent = '$25.00';
            courseTitle.textContent = 'The Python-Basics Course';
            courseDuration.textContent = ' 7 hours 00 minutes';
            reviewText.textContent = '{10k Review}';
        }
    
        for (let i = 0; i < 5; i++) {
            const starLink = document.createElement('a');
            const starIcon = document.createElement('i');
            starIcon.classList.add('fa-solid', 'fa-star');
            starIcon.style.color = '#f0cf28';
            starLink.appendChild(starIcon);
            starIcons.appendChild(starLink);
        }
    
        // Create the review count


        reviewCount.appendChild(reviewText);
        // Assemble the elements
        ratingContainer.appendChild(starIcons);
        courseText.appendChild(coursePrice);
        courseText.appendChild(courseTitle);
        courseText.appendChild(courseDuration);
        courseText.appendChild(ratingContainer);
        courseText.appendChild(reviewCount);
        courseRow.appendChild(courseImage);
        courseRow.appendChild(courseText);
        // Append the course structure to the 'course-content' div
        const courseContentDiv = document.getElementById('course-content');
        courseContentDiv.appendChild(courseRow);
        Show_More=1;
    }
}
    else{
        alert("You Haven't Joined any other Courses");
    }

}

// function ShowMore(){
//     for(let j=0;j<3;j++){
//             // Create the inner row div
//             const courseRow = document.createElement('div');
//             courseRow.classList.add('row');
        
//             // Create the course image
//             const courseImage = document.createElement('img');
//             courseImage.src = 'images/phplogo.jpg';
//             courseImage.alt = '';
        
//             // Create the course text container
//             const courseText = document.createElement('div');
//             courseText.classList.add('course-text');
        
//             // Create the course details
//             const coursePrice = document.createElement('h5');
//             coursePrice.textContent = '$25.00';
        
//             const courseTitle = document.createElement('h3');
//             courseTitle.textContent = 'The PHP Course';
        
//             const courseDuration = document.createElement('h6');
//             courseDuration.textContent = ' 9 hours 00 minutes';
        
//             // Create the rating container
//             const ratingContainer = document.createElement('div');
//             ratingContainer.classList.add('rating');
        
//             // Create the star icons
//             const starIcons = document.createElement('div');
//             starIcons.classList.add('star');
        
//             for (let i = 0; i < 5; i++) {
//                 const starLink = document.createElement('a');
//                 const starIcon = document.createElement('i');
//                 starIcon.classList.add('fa-solid', 'fa-star');
//                 starIcon.style.color = '#f0cf28';
//                 starLink.appendChild(starIcon);
//                 starIcons.appendChild(starLink);
//             }
        
//             // Create the review count
//             const reviewCount = document.createElement('div');
//             reviewCount.classList.add('review');
//             const reviewText = document.createElement('p');
//             reviewText.textContent = '{20k Review}';
//             reviewCount.appendChild(reviewText);
        
//             // Assemble the elements
//             ratingContainer.appendChild(starIcons);
        
//             courseText.appendChild(coursePrice);
//             courseText.appendChild(courseTitle);
//             courseText.appendChild(courseDuration);
//             courseText.appendChild(ratingContainer);
//             courseText.appendChild(reviewCount);
        
//             courseRow.appendChild(courseImage);
//             courseRow.appendChild(courseText);
        
        
//             // Append the course structure to the 'course-content' div
//             const courseContentDiv = document.getElementById('course-content');
//             courseContentDiv.appendChild(courseRow);
            
//     }
        
//     }


//Java Script of Wishlist page

document.getElementById("AddToCart").addEventListener("click", function() {
    // Clone the row element by its ID
    document.getElementById("AddToCart").textContent = "Buy Now";
    var wishlistItem = document.getElementById('mysql').cloneNode(true);

    // Store the cloned item in local storage
    localStorage.setItem('cartItem', wishlistItem.outerHTML);

    // Redirect to cart.html
    window.location.href = 'cart.html';
});




