// setting the selector options 
// then breaking out functions by layout
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
prospectsButton.addEventListener('click', prospectsLayout);
modelButton.addEventListener('click', modelLayout);
modelApplicationButton.addEventListener('click', modelApplicationLayout);





// Selected Layout Changeover Functions
function prospectsLayout(){
    // time function load
    //
    // layout changes
    form.style.gridTemplateAreas = ' "selector selector""taxonomy parameters""overview parameters""inputs output""details details""pricing pricing" ';
    alert('prospectsLayout');
}

function modelLayout(){
    form.style.gridTemplateAreas = ' "details details""pricing pricing""selector selector""taxonomy parameters""overview parameters""inputs output" ';
    alert('modelLayout')
}


function modelApplicationLayout(){
    form.style.gridTemplateAreas = ' "inputs output""selector selector""taxonomy parameters""overview parameters""details details""pricing pricing" ';
    alert('modelApplicationLayout')
}
