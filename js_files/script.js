
//Java Script of Login Page

let login=false;
let uname=["afzal"];
let pass=["123"]
function log(){
    let name=document.getElementById("uname").value;
    let p=document.getElementById("pass").value;
    for (let i=0;i<uname.length;i++){
        console.log(login);
    if (uname[i]==name && pass[i]==p){
        login=true;
        console.log(login);
        alert("Login Successful");
        window.location.href="my-courses.html";
    }
    }
    if (!login){
        alert("Username Not Registered OR Invalid username/password");
    }
    return login;
    
}

// Java Script for Registration page 

function register(){
    let name=document.getElementById("runame").value;
    let np=document.getElementById("enpass").value;
    let rp=document.getElementById("rrpass").value;
    if (np!=rp){
        alert("Reenterd pasword dosen't match with the new password!");
    }
    else{
        uname.push(name);
        pass.push(rp);
        alert("Registered Successful!");
        window.location.href="login.html";
        console.log(uname,pass);
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

if (login){

}

function buy(){
    if (login){
        window.location.href='wishlist.html';
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
    
        // for (let i = 0; i < 5; i++) {
        //     const starLink = document.createElement('a');
        //     const starIcon = document.createElement('i');
        //     starIcon.classList.add('fa-solid', 'fa-star');
        //     starIcon.style.color = '#f0cf28';
        //     starLink.appendChild(starIcon);
        //     starIcons.appendChild(starLink);
        // }
    
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


    
