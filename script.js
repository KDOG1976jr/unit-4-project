let questionOne = document.querySelector(".question-1");
let questionTwo = document.querySelector(".question-2");
let resultPage = document.querySelector(".result");
let solidOption = document.querySelector(".one");
let pearlOption = document.querySelector(".two");
let hybridOption = document.querySelector(".three");
let urethaneOption = document.querySelector(".four");
let oneHandedOption = document.querySelector(".two-one");
let twoHandedOption = document.querySelector(".two-two");
let submitbtn = document.querySelector(".submit");
let results = document.querySelector(".results");
let kent = document.querySelector(".Kent");
let tackett = document.querySelector(".Tackett");
let belmo = document.querySelector(".Belmo");
let simo = document.querySelector(".Simo");

let solidResult = false;
let pearlResult = false;
let hybridResult = false;
let urethaneResult = false;
let oneHandedResult = false;
let twoHandedResult = false;

solidOption.addEventListener("click", function(){
    solidResult = true;
    questionOne.style.display = "none";
    questionTwo.style.display = "block";

});
pearlOption.addEventListener("click", function(){
    pearlResult = true;
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
});
hybridOption.addEventListener("click", function(){
    hybridResult = true;
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
});
urethaneOption.addEventListener("click", function(){
    urethaneResult = true;
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
});
oneHandedOption.addEventListener("click", function(){
    oneHandedResult = true;
});
twoHandedOption.addEventListener("click", function(){
    twoHandedResult = true;

});

submitbtn.addEventListener("click", function(){
    questionTwo.style.display = "none";
    resultPage.style.display = "block";
    console.log(solidResult, oneHandedResult)
    if(solidResult === true && oneHandedResult === true){
        results.innerHTML = "You are Marshall Kent!";
        kent.style.display = "block";
    }
    else if(solidResult === true && twoHandedResult === true){
        results.innerHTML = "You are Jason Belmonte!";
        belmo.style.display = "block";
    } else if(pearlResult === true && oneHandedResult === true){
        results.innerHTML = "You are E.J. Tackett!";
        tackett.style.display = "block";
    } else if(pearlResult === true && twoHandedResult === true){
        results.innerHTML = "You are Anthony Simosen!";
        simo.style.display = "block";
    } else if(hybridResult === true && oneHandedResult === true){
        results.innerHTML = "You are E.J. Tackett!";
        tackett.style.display = "block";
    } else if(hybridResult === true && twoHandedResult === true){
        results.innerHTML = "You are Anthony Simosen!";
        simo.style.display = "block";
    } else if(urethaneResult === true && oneHandedResult === true){
        results.innerHTML = "You are Marshall Kent!";
        kent.style.display = "block";
    }else if(urethaneResult === true && twoHandedResult === true){
        results.innerHTML = "You are Jason Belmonte!";
        belmo.style.display = "block";
    }
})
    


