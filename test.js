// main page whale click

// let whale = document.querySelector('#the-puff')
// whale.addEventListener('submit', (event) => {
//     event.preventDefault()
//     .then(() => {
//         // let a = document.createElement('a')
//         // a.setAttribute("href", "#the-results")
//         console.log('nice')
//         let body = document.querySelector('body')
//         body.scroll(0,937);
//     })
// })


// jquery for matching inputs
// $('#find').keyup(function () {
//     $('#barred').val($(this).val());
// });
// $('#barred').keyup(function () {
//     $('#find').val($(this).val());
// });



// page 2 stuff

// Bing Requester Form Stuff
// const scriptURL = 'https://script.google.com/macros/s/AKfycbw1D59rea6XSsgguNMZeYBWSgn-rNnrw6Ao8x2jYCYFbtGQ7IDt/exec'
// const form = document.querySelector('form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => console.log('Success!', response))
//         .then(() => {
//             //This is where you write your code
//             // Bing Web Maker
//             let cat = document.createElement('div')
//             cat.classList.add('container')
//             let hold = document.querySelector('#super-container');
//             let bing = document.createElement('iframe');
//             let query = document.querySelector('#barred').value;
//             let pidgeon = document.querySelector('#callme').value;
//             console.log(query);
//             // let pidgeon = query.value;
//             let web = "http://www.bing.com/search?q=";
//             console.log(web);
//             let send = web + query
//             console.log(send)
//             bing.scrolling = "no"
//             bing.classList.add('window');
//             bing.setAttribute('src', send);
//             hold.appendChild(bing)


//             // console.log(document.querySelector('#barred').value)

//             const rectangle = document.getElementById('barred')
//             rectangle.value = ""

//             // hold.innerHTML = ""


//             //Do not alter below this line
//         })
//         .catch(error => console.error('Error!', error.message))
        

// })

document.getElementById('find').addEventListener('keyup', function(e){
    if (e.code === 'Enter') {
        document.getElementById('the-puff').click();
    }
})
// document.getElementById('the-puff').onclick = function() {
//     alert('Clicked!');
// }

function testJS() {
    var b = document.getElementById('find').value,
        url = '../GAFP/page2.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}