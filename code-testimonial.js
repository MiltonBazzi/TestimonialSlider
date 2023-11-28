// set to index
const textito = document.querySelector(".user-name");
const prevArrow = document.getElementById ("prev-Arrow");
const nextArrow = document.getElementById ("next-Arrow");
const imageP = document.querySelector(".image");
const textP = document.querySelector(".user-testimonial");
const nameP = document.querySelector(".user-name");
const degreeP = document.querySelector(".user-degree");

// array
const user = [
    {
        name: 'Tanya Sinclair',
        imageUrl: './images/image-tanya.jpg',
        testimonial: ' “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ',
        degree: 'UX Engineer'
    },
    {
        name: 'John Tarkpor',
        imageUrl: './images/image-john.jpg',
        testimonial: ' “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ',
        degree: 'Junior Front-end Developer'
    }
]

// function
const updateInfo = (uIndex) =>{
    imageP.setAttribute('src', user[uIndex].imageUrl);
    textP.innerHTML = user[uIndex].testimonial;
    nameP.innerHTML = user[uIndex].name;
    degreeP.innerHTML = user[uIndex].degree;
}

// idex
let userIndex = 0;
console.log(userIndex);

// action for the image and text
prevArrow.addEventListener("click", ()=>{
    if(userIndex === 0){
        userIndex = user.length-1;
    } else{
        userIndex --;
    }        
    updateInfo(userIndex);    
});

nextArrow.addEventListener("click", ()=>{
    if(userIndex === user.length-1){
        userIndex = 0;
    } else{
        userIndex ++;
    } 
    updateInfo(userIndex); 
});