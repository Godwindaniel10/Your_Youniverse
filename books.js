/* book1 */
const book1 = document.getElementById("book1");
book1.addEventListener("mouseover" , function(){
  document.getElementById("book1p").style.display = "block";
});
book1.addEventListener("mouseout" , function(){
  document.getElementById("book1p").style.display = "none";
});


/* book2 */
const book2 = document.getElementById("book2");
book2.addEventListener("mouseover" , function(){
  document.getElementById("book3p").style.display = "block";
});
book2.addEventListener("mouseout" , function(){
  document.getElementById("book1p").style.display = "none";
});



/* book3 */
const book3 = document.getElementById("book3");
book3.addEventListener("mouseover" , function(){
  document.getElementById("book3p").style.display = "block";
});
book3.addEventListener("mouseout" , function(){
  document.getElementById("book3p").style.display = "none";
});