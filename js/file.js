// Page loads, DOM loads, User reads page
document.addEventListener('DOMContentLoaded', console.log ('DOM Loaded'));

// Identify page elements
let name = document.querySelector('#fname');
let bday = document.querySelector('#bday');
let male = document.querySelector('#male');
let female = document.querySelector('#female');
let nonbinary = document.querySelector('#nonbinary');
// let form = Array.from(document.querySelectorAll('#userinput input')).reduce((acc, input) => ({...acc,[input.id]: input.value}), {});
let form = document.querySelector('form');

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
    if(checkData() === false){
    e.preventDefault();
    }
})



// convert form into string

userInput.addEventListener('submit', (e) => {
    let selectedValue;
    const rbs = document.querySelectorAll("input[name='gender']");
    for(const rb of rbs){
            if(rb.checked){
                selectedValue = rb.value;
                break;
            }
        }
    alert(selectedValue);
});






// function genderConv() {
//     let str = "  ";
// let isChecked = radioButton.Checked;
// if (isChecked) {
//     str=radioButton1.Text
// } else if {
//     str=radioButton2.Text;
// }   else {
//  str=radioButton3.Text;
// }
// }
// genderConv()

// form.addEventListener("submit", (e) => {
// let data = new FormData(form);
// let output = " ";
// for(const entry of data){
//     output = output + entry[0] + "=" + entry[1] + "\r";
// };
// newArr.innerText = output;
// e.preventDefault();
// console.log(newArr);
// }, false); 

// let formData = userInput.serializeJSON;
// let jsonString = JSON.stringify(formData);
// setInterval(console.log(jsonString),10000);





// filled() {
// e.preventDefault();
// const rbs = document.querySelectorAll("input[name='gender']");
// let selectedValue;
// let object = {
//     filledName: name.value,
//     filledBday: bday.value,
//     filledRadio: selectedValue,
// };
// for(const rb of rbs){
//     if(rb.checked){
//         selectedValue = rb.value;
//         break;
//     }
// }
// formData.push(object);
// }
// let formData = [];
// console.log(formData.value);


// const rbs = document.querySelectorAll("input[name='gender']");
// let selectedValue;
// for(const rb of rbs){
//     if(rb.checked){
//         selectedValue = rb.value;
//         break;
//     }
// }
// console.log(selectedValue)

// fetch request goes inside the preventdefault callback function for user input
// const url = 'http://api.giphy.com/v1/gifs/translate/?api_key=MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN';
// fetch(url, {
//     method: 'GET',
//     'api_key': 'MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN',
//     'username': 'mh610creative'
// });

// })
// .then(res => {
//     if (res.ok) {
//         console.log('SUCCESS')
// } else {
//     console.log("Not successful")
// }
// res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))
fetch('http://api.giphy.com/v1/gifs/search?api_key=MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN&limit=3&q=jane-february-nonbinary')
  .then(function(data) {
    return data.json();
  })
  .then(function(json) {
    let posts = json;
    console.log(posts);
});



// THE ABOVE WORKS, but i have to change the fetch url parameter for search "&s=" for each field of the form, dont know if the translate feature will return 4 at once so does that mean looping fetch requests?
// .then(res => {
//     if (res.ok) {
//         console.log('SUCCESS')
// } else {
//     console.log("Not successful")
// }
// res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))

// request.get('http://api.giphy.com/v1/gifs/translate' , { 'api_key': 'MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN', 'user': 'mh610creative'});


// let giphyKey = 'MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN';
// let url = 'http://api.giphy.com/v1/gifs/translate'


// fetch data, get it, parse it to create elements in JS to manipulate DOM


// Form disappears

// DOM Manipulation - replace HTML code with JS or delete HTML and insert JS






// Form is replaced by GIFs pulled by API,Fetch AJAX Data here






// User clicks other links on page maybe




// from mario, function for API call is only invoked on-click OR be stored only locally inside the event listener
