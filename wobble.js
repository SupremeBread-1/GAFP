let images = ['../GAFP/wobbleup.gif', '../GAFP/Finished\ images/4.png', '../GAFP/Finished\ images/5.png', '../GAFP/Finished\ images/6.png', '../GAFP/Finished\ images/7.png' ]
console.log(images)

var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

// x.addEventListener()

// Random Image Generator and Positioner

let body = document.querySelector('body')
body.addEventListener('click', spawn)

let blue = document.getElementById('blue')

function spawn() {
    // body.style.border = '2px solid blue'
    let totalx = Math.floor(x - (Math.random() * x));
    let totaly = Math.floor(y - (Math.random() * y));
    let div = document.createElement('div');
    div.classList.add('divstyle','appear');
    div.id = "eye";
    div.style.position = 'absolute';
    div.style.top = totaly + 'px';
    div.style.left = totalx + 'px';
    div.style.border = '2px solid red';
    console.log(div.style.left + ", " + div.style.top)
    let spin = images[Math.floor(Math.random() * images.length)];
    // console.log(spin);
    let wheel = document.createElement('img');
    wheel.src = spin;
    wheel.id = "blink";
    // console.log(wheel.src);
    wheel.classList.add('imgstyle','appear');
    // console.log(wheel.classList);
    div.appendChild(wheel)
    blue.appendChild(div)
    const fade = document.querySelectorAll('#eye');
    console.log(fade);
    const away = document.querySelectorAll('#blink');
    console.log(away);
    fade.forEach(wheel => wheel.addEventListener('transitionend', runaway));
    
}

function runaway() {
    // if (wheel.propertyName !== 'transform') return;
    // console.log(this);
    // let wheel = document.querySelectorAll('#blink')
    // fade.classList.remove('appear')
    // fade.classList.add('disappear')
    div.classList.remove('divstyle')
    // div.classList.add('disappear')
    // console.log(fade)
    // console.log(div)
    // div.remove();
    // wheel.remove();
    // blue.remove();
    // const fade = document.querySelectorAll('#eye');
    console.log(blue.firstChild)
    // while (blue.firstChild) {
    //     blue.removeChild(blue.firstChild);
    // }
    blue.style.height = 0;
    blue.innerHTML = '';

}