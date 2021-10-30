let addEl = document.querySelector(".add1");
let main_target = document.querySelector(".entered1")
let form1 = document.querySelector(".form1")
let borderBot = document.querySelector(".inputs")
let linediv = document.querySelector(".linediv")



addEl.addEventListener("click", ()=>{
    loader1(); 
 
    
 
 
  
}); 

function loader1() {
let inputText1 = document.getElementById("inputText1").value;
let sontext = inputText1.toUpperCase();
main_target.innerHTML += 
`<div  class="checkboxer"> 

<i class="far fa-thumbs-up">Doing>>></i>
<label class="okey" >${sontext}</label> 
<img class="delete" src="delete.svg" alt="">

 
</div> 
`;
form1.reset();



}

main_target.addEventListener('click', (a) => {
    if (a.target.classList.contains('delete')) {
     a.target.parentElement.classList.toggle("changed2");    
   
       }

});

main_target.addEventListener('click', (a) => {
    if (a.target.classList.contains('fa-thumbs-up') ) {
        a.target.classList.toggle("changed1")
        a.target.parentElement.classList.toggle("changed3"); 
        a.target.parentElement.innerHTML += `<i class="two">Done>>></i>`
       
       }

});
main_target.addEventListener('click', (a) => {
    if (a.target.classList.contains('two')) {
     a.target.parentElement.classList.toggle("changed4");  
     a.target.classList.toggle("changed1")  
     a.target.addEventListener
   
       }

});






