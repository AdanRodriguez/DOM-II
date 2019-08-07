// Your code goes here
// Event1
 const Nav = document.querySelector("nav");

 Nav.addEventListener("mouseover", function(event){
     event.target.style.color = "orange";
     setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    });

//Event 2

document.addEventListener('keydown', function(e){
    console.log(e);
 });

 //Event 3
 document.addEventListener('keyup', function(e){
    console.log(e);
 });

 //Event 4
const H2 = document.querySelector("h2");

H2.addEventListener("wheel", function(e){
    this.style.fontSize = "150px";
});
// document.querySelector("h2").addEventListener("wheel", e);
// function e() {
//     this.style.fontSize = "150px";
// }

//Event 5

document.addEventListener('scroll', () =>{
    const scrolled = window.scrollY;
    console.log(scrolled);
 });

 //Event 6

 const Section = document.querySelector("section");

 Section.addEventListener("click", function(){
     Section.style.background = "lightblue"
 });

 //Event 7

 window.addEventListener("resize", function(){console.log('resize!')}, true);

 //Event8

 const Header = document.querySelector('header');

 Header.addEventListener("dblclick", function(){
    Header.style.color = "red"
 });

 //Event 9

 const mouseEnter = document.querySelector("p");
    mouseEnter.addEventListener("mouseenter", function(event) {
        mouseEnter.style.background = "green";
    });

//Event 10

const mouseLeave = document.querySelector("p");
    mouseLeave.addEventListener("mouseleave", (event) =>{
        mouseLeave.style.background = "pink";
    });



     






//  * [ ] `mouseover`
//  * [ ] `keydown`
//  * [ ] `wheel`
//  * [ ] `drag / drop`
//  * [ ] `load`
//  * [ ] `focus`
//  * [ ] `resize`
//  * [ ] `scroll`
//  * [ ] `select`
//  * [ ] `dblclick`