// Bing Requester Form Stuff
const scriptURL = 'https://script.google.com/macros/s/AKfycbw1D59rea6XSsgguNMZeYBWSgn-rNnrw6Ao8x2jYCYFbtGQ7IDt/exec'
const form = document.querySelector('form')

const soup = document.querySelector('#super-container')

console.log(document.location.href)




// Bing Web Maker
// let bing = document.createElement('iframe')

// bing.classList.add('window')

// let work = document.getElementById('but')
// work.addEventListener('click', {


// })

window.onload = function () {
    
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('barred').value = data.name;

    let dog = document.createElement('div')
    dog.classList.add('container')
    let mouse = document.createElement('iframe');
    let numbaone = document.querySelector('#barred').value;
    console.log(numbaone);
    let web = "http://www.bing.com/search?q=";
    console.log(web);
    const send = web + numbaone
    console.log(send)

    mouse.scrolling = "no"
    mouse.classList.add('window');
    mouse.setAttribute('src', send);
    dog.appendChild(mouse)
    soup.appendChild(dog)
    console.log(document.location.href)
    console.log(send)

    

    // form.addEventListener('submit', () => {
    //     // e.preventDefault()
    //         if (soup.innerHTML !== "") {
    //             fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //             .then(response => console.log('Success!', response))
    //             .then(() => {
    //             //This is where you write your code
    //             // Bing Web Maker
    //             let cat = document.createElement('div')
    //             cat.classList.add('container')
    //             let hold = document.querySelector('#super-container');
    //             let bing = document.createElement('iframe');
                
    //             let query = document.querySelector('#barred').value;
    //             // let pidgeon = document.querySelector('#callme').value;
    //             console.log(query);
    //             // let pidgeon = query.value;
    //             let web = "http://www.bing.com/search?q=";
    //             console.log(web);
    //             let send = web + query
    //             console.log(send)
    //             bing.scrolling = "no"
    //             bing.classList.add('window');
    //             // bing.getElementById('b_footer').setAttribute('display', 'none')
    //             bing.setAttribute('src', send);
    //             // bing.setAttribute('target', '_blank')
    //             cat.appendChild(bing)
    //             hold.appendChild(cat)
    
    //             // bing.setAttribute('id', 'force')
    //             // function myFunction() {
    //             //     var x = document.getElementById('force');
    //             //     var y = x.contentWindow.document;
    //             //     y.body.style.backgroundColor = 'red';
    //             // }
    //             // bing.setAttribute('visibility','hidden')
    
    //             // console.log(document.querySelector('#barred').value)
    
    //             const rectangle = document.getElementById('barred')
    //             // rectangle.value = ""
    
    
    //             //Do not alter below this line
    //         })
    //         .catch(error => console.error('Error!', error.message))
            
    //         //  hold.innerHTML = ""
    //         }
    //         else {
    //             soup.classList.add('ghosted')
    //         }
    
    // })
    

    // return money = document.querySelector('#barred').value
    // let better = document.write(send.replace('%20', / /));
    // let  = document.getElementById('barred').value.write(send.replace('%20', / /));
} 
// form.addEventListener('submit',(e) => {
//     e.preventDefault()

//     const turn = "http://127.0.0.1:5500/page%202%20prototype/page2.html?name=" + document.getElementById('barred').value
//     console.log(turn)
// })
// const turn = "http://127.0.0.1:5500/page%202%20prototype/page2.html?name=" + "cat"
// console.log(turn)
    
// } else {
// }

// function reload() {
//     var c = document.getElementById('barred').value,
//         url = '../page\ 2\ prototype/page2.html?name='  + encodeURIComponent(c);
//         console.log(url)

//     document.location.href = url;
// }

// var bacon = document.querySelector('#barred').value;
// localStorage.setItem('fried', bacon);

// var bacon = localStorage.getItem('fried');
// console.log(bacon);

const circle = [0,1]

function coinflip() {
    // return(Math.random() * circle.length)
    return Math.floor( Math.random() * circle.length)
}

const pop = document.getElementById('web')
const goose = ['../please.png', '../no.png','../punch.png','../knife.png', '../dead.png','../loss.png','../pathetic.jpg','../lata.png']
let imgi = 0
const center = document.getElementById('no-look')
center.setAttribute('src', goose[imgi])
center.addEventListener('click', () => {
    if (imgi >= goose.length - 1) {
        pop.classList.add('ghosted')
    } 
    else {
        imgi += 1
    } center.setAttribute('src', goose[imgi])
})

// let 0=0; 0 <= 8; add 1
//     if 0 > 7
//     ghost
//     else if 0 = 4
//     1 or 0

// if (imgi >= goose.length - 1) {
//     pop.classList.add('ghosted')
// } 
// else {
//     imgi += 1
// } center.setAttribute('src', goose[imgi])

form.addEventListener('submit', (e) => {
    e.preventDefault()
        if (soup.innerHTML !== "") {
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .then(() => {
            //This is where you write your code
            // Bing Web Maker
            let cat = document.createElement('div')
            // cat.classList.add('container')
            let hold = document.querySelector('#super-container');
            let bing = document.createElement('iframe');
            
            let query = document.querySelector('#barred').value;
            // let pidgeon = document.querySelector('#callme').value;
            console.log(query);
            // let pidgeon = query.value;
            let web = "http://www.bing.com/search?q=";
            console.log(web);
            let send = web + query
            console.log(send)
            bing.scrolling = "no"
            // bing.classList.add('window');
            
            bing.setAttribute('src', send);
            
            cat.appendChild(bing)
            hold.appendChild(cat)

            // bing.setAttribute('id', 'force')
            // function myFunction() {
            //     var x = document.getElementById('force');
            //     var y = x.contentWindow.document;
            //     y.body.style.backgroundColor = 'red';
            // }
            // bing.setAttribute('visibility','hidden')

            // console.log(document.querySelector('#barred').value)

            const rectangle = document.getElementById('barred')
            // rectangle.value = ""


            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
        
        //  hold.innerHTML = ""
        }
        else {
            soup.classList.add('ghosted')
        }

})

function nestJS() {
    var c = document.getElementById('barred').value,
        url = '../page3.html?name=' + encodeURIComponent(c);
    
    document.location.href = url;

}