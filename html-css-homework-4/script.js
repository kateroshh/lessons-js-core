let bubble1 = document.getElementById("bubble-1");
let bubble2 = document.getElementById("bubble-2");
let toptext = document.getElementById("toptext");
let person = document.getElementById("person");


window.addEventListener('scroll', () => {
    var value = window.scrollY;
    console.log(value);

    bubble1.style.top = value * 1.5 + 'px';
    bubble2.style.top = value * 1.5 + 'px';
    toptext.style.top = - value * 1.5 + 'px';

    // person.style.top =  -value * 0.5  + 'px';

    //text.style.top = value * 1 + 'px';
});