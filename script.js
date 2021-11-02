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

<i class="one fas fa-check-circle"></i>
<label class="okey" >${sontext}</label> 
<i class="two fas fa-check-double"></i>
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
    let date = new Date();
    if (a.target.classList.contains('one') ) {
        a.target.classList.toggle("changed1")
        a.target.parentElement.classList.toggle("changed3"); 
        a.target.parentElement.innerHTML += `<p class="dates">Start time ${setTimer(date.getHours())} : ${setTimer(date.getMinutes())}`
       
       }

});
main_target.addEventListener('click', (a) => {
    let date = new Date();
    if (a.target.classList.contains('two')) {
     a.target.parentElement.classList.toggle("changed4");  
     a.target.classList.toggle("changed1")  ;
     a.target.parentElement.innerHTML += `<p class="dates2">Finish time ${setTimer(date.getHours())} : ${setTimer(date.getMinutes())}</p>`

   
       }

});
function setTimer(date) {
    if(date < 10){ date = "0" + date; return date;}
    else return date;
}





