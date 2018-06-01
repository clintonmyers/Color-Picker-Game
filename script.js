/*
What's left to do?
Match the font
Fade
*/

const bigger = document.getElementsByClassName("bigger")[0];
let color = document.getElementsByClassName("color");
let diff = 1;

let assignlet = function() {
    
}
let randRGB = function() {
    return Math.floor(Math.random() * 256);
}

let randDiv = function() {
    return Math.floor(Math.random() * color.length);
}

let createRGB = function() {
    return 'rgb(' + randRGB() + ', ' + randRGB() + ', ' + randRGB() + ')';
}

let changeDiff = function(diff) {
    let diffDiv = document.getElementsByClassName("difficulty");
    for(i = 0; i < 3; i++) {
        diffDiv[i].className = 'difficulty';
        console.log(diffDiv[i].className);
    }
    diffDiv.item(diff).className += ' selected';
    console.log(diffDiv.item(diff).className);
    document.getElementsByClassName("btm-container")[0].innerHTML = '';
    let divs = (diff * 3) + 3;
    for(i = 0; i < divs; i++) {
        document.getElementsByClassName("btm-container")[0].innerHTML += '<div class="color"></div>';
    }
    console.log(document.getElementsByClassName("btm-container")[0].innerHTML);
    document.getElementsByClassName("message")[0].textContent = '';
    document.getElementsByClassName("top")[0].style.backgroundColor = "steelblue";
    color = document.getElementsByClassName("color");
    let answer = randDiv();
    for(i = 0; i < color.length; i++) {
        color[i].className = 'color';
        color[i].style.backgroundColor = createRGB();
        if (i == answer) {
            bigger.textContent = color[i].style.backgroundColor.toUpperCase();
            color[i].className += ' answer';
        }
    }
    for(i = 0; i < color.length; i++) {
        if (bigger.textContent === color[i].style.backgroundColor.toUpperCase()) {
            color[i].addEventListener("click", function(){
                for(i = 0; i < color.length; i++) {
                    color[i].style.backgroundColor = bigger.textContent;
                }
                document.getElementsByClassName('top')[0].style.backgroundColor = bigger.textContent;
                document.getElementsByClassName("message")[0].textContent = 'YOU WIN!';
                for(i = 0; i < color.length; i++) {
                    if (color[i].className === 'color hidden') {
                        color[i].className = 'color visible';
                    }
                }
            });
        } else {
            color[i].addEventListener("click", function(){
                document.getElementsByClassName("message")[0].textContent = 'guess again';
                this.className += ' hidden';
            });
        }
    }
}

let setup = function() {
    changeDiff((color.length/3)-1);
}

changeDiff(1);