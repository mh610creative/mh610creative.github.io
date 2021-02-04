let name = document.querySelector('#fname');
let bday = document.querySelector('#bday');
let male = document.querySelector('#male');
let female = document.querySelector('#female');
let nonbinary = document.querySelector('#nonbinary');
let form = document.getElementById('userInput');



let data = new FormData();
document.addEventListener('DOMContentLoaded', () => {
       data.append('name' , '  ');
       data.append('birthday' , '   ');
       data.append('gender', '   ');
       Array.from(data); 
    // console.log(Array.from(data));
    //    for (let obj of data){
    //        console.log(obj)
    //    }
});


userInput.addEventListener('submit', (e) => {
     e.preventDefault();
     data.name = name.value;
     data.birthday = bday.value;
     data.gender = e.target.gender.value;
    //  console.log(data); 
     let url = 'https://api.giphy.com/v1/gifs/search?api_key=MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN&limit=3&q=';
     url = url.concat(data.name + "-" + data.birthday + "-" + data.gender);
    //  console.log(url);
     getData(url);
    });



    function getData(url) {
    fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      let posts = json.data;
    //   console.log(posts);
      document.querySelector('.formBox').removeChild(form);
      document.querySelector('h3').innerText = 'BINGO! GIF DNA!';
      showResults(posts);

    })
    
}

const showResults = (input) => {
    for(let i=0; i<3; i++){
        let gif = document.createElement('img');
        document.querySelector('.formBox').appendChild(gif);
        gif.setAttribute('class', 'gif');
        gif.setAttribute('src', input[i].images.fixed_width.url);
    }
    }








































