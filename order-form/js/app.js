// setting the selector options 
// then breaking out functions by layout
const reportName = document.querySelector('#reportName');
const selector = document.querySelector('#defaultLayout');
const prospectsButton = document.querySelector('#prospects');
const modelButton = document.querySelector('#model');
const modelApplicationButton = document.querySelector('#model-application');

// set module consts
const form = document.querySelector('#page-grid');
const overview = document.querySelector('#overview');
const taxonomy = document.querySelector('#taxonomy');
const parameters = document.querySelector('#parameters');
const inputs = document.querySelector('#inputs');
const details = document.querySelector('#details');
const output = document.querySelector('#output');
const pricing = document.querySelector('#pricing');


// Selector Button Event Listeners
selector.addEventListener('click', defaultLayout);
prospectsButton.addEventListener('click', prospectsLayout);
modelButton.addEventListener('click', modelLayout);
modelApplicationButton.addEventListener('click', modelApplicationLayout);





// Selected Layout Changeover Functions

function defaultLayout(){
    form.style.gridTemplateAreas = ' "selector overview""taxonomy taxonomy""parameters parameters""inputs output""details details""pricing pricing" ';
    reportName.innerHTML = "";
}


function prospectsLayout(){
    form.style.gridTemplateAreas = ' "selector selector""taxonomy parameters""overview parameters""inputs output""details details""pricing pricing" ';
    reportName.innerHTML = "prospectsLayout";
}

function modelLayout(){
    form.style.gridTemplateAreas = ' "details details""pricing pricing""selector selector""taxonomy parameters""overview parameters""inputs output" ';
    reportName.innerHTML = "modelLayout";
}


function modelApplicationLayout(){
    form.style.gridTemplateAreas = ' "inputs output""selector selector""taxonomy parameters""overview parameters""details details""pricing pricing" ';
    reportName.innerHTML = "modelApplicationLayout";
}
