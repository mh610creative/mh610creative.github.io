// Page loads, DOM loads, User reads page
document.addEventListener('DOMContentLoaded', console.log ('DOM Loaded'));

// Identify page elements
let name = document.querySelector('#fname');
let bday = document.querySelector('#bday');
let male = document.querySelector('#male');
let female = document.querySelector('#female');
let nonbinary = document.querySelector('#nonbinary');
let form = Array.from(document.querySelectorAll('#userinput input')).reduce((acc, input) => ({...acc,[input.id]: input.value}), {});

// User enters Form Data, types in form

name.addEventListener('input', (e) => {
    let delay= setInterval((console.log('name was entered'), 5000));
    clearInterval(delay);
})
bday.addEventListener('input', (e) =>{
    let delay= setInterval((console.log('bday was entered'), 50000));
    clearInterval(delay);
})
female.addEventListener('click', (e) =>{
    let delay= setInterval((console.log('female clicked'), 5000));
    clearInterval(delay);
})
male.addEventListener('click', (e) =>{
    let delay= setInterval((console.log('male clicked'), 5000));
    clearInterval(delay);
})
nonbinary.addEventListener('click', (e) =>{
    let delay= setInterval((console.log('non-binary clicked'), 5000));
    clearInterval(delay);
})

//  check for above, form validation

function checkData() {
    // submit event listener
if (name.value === '' || bday.value === ''){
    console.log('form incomplete')
    return false
} else if(male.click === false){
    console.log('form incomplete')
    return false
} else if(female.click === false){
    console.log('form incomplete')
    return false
} else if(nonbinary.click === false){
    console.log('form incomplete')
    return false
} else {
    console.log('form complete')
    return true
}
};

// User clicks Submit button

userInput.addEventListener('submit', (e) =>{
    let delay= setInterval((console.log('submit clicked'), 5000));
    clearInterval(delay);
    checkData();
    e.preventDefault();
})

// fetch request goes inside the preventdefault callback function for user input
// Form disappears

// DOM Manipulation - replace HTML code with JS or delete HTML and insert JS






// Form is replaced by GIFs pulled by API,Fetch AJAX Data here






// User clicks other links on page maybe




// from mario, function for API call is only invoked on-click OR be stored only locally inside the event listener

