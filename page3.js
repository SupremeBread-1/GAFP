window.onload = function () {
    
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('can').value = data.name;

    let dog = document.createElement('div')
    dog.classList.add('container')
    let mouse = document.createElement('iframe');
    let numbaone = document.querySelector('#can').value;
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
}

function backpeddleJS() {
    var d = document.getElementById('can').value,
        url = '../GAFP/page2.html?name=' + encodeURIComponent(d);
    document.location.href = url;
}