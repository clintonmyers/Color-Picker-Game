/*
What's left to do?
Match the font
Fix bugs
  RGB numbers don't appear all the time
  double functions
*/

//Variables
const bigger = document.getElementsByClassName("bigger")[0];
var color = document.getElementsByClassName("color");
var answer = 0;

//Reusable Functions

var assignVar = function() {
    
}
var randRGB = function() {
    return Math.floor(Math.random() * 256);
}

var randDiv = function() {
    return (Math.floor(Math.random() * color.length) + 1);
}

var createRGB = function() {
    return 'rgb(' + randRGB() + ', ' + randRGB() + ', ' + randRGB() + ')';
}

var changeDiff = function(diff) {
    var diffDiv = document.getElementsByClassName("difficulty");
    for(i = 0; i < 3; i++) {
        diffDiv[i].className = 'difficulty';
        console.log(diffDiv[i].className);
    }
    diffDiv.item(diff).className += ' selected';
    console.log(diffDiv.item(diff).className);
    document.getElementsByClassName("btm-container")[0].innerHTML = '';
    var divs = (diff * 3) + 3;
    for(i = 0; i < divs; i++) {
        document.getElementsByClassName("btm-container")[0].innerHTML += '<div class="color"></div>';
    }
    console.log(document.getElementsByClassName("btm-container")[0].innerHTML);
    setup();
}

var setup = function() {
    document.getElementsByClassName("message")[0].textContent = '';
    document.getElementsByClassName("top")[0].style.backgroundColor = "steelblue";
    color = document.getElementsByClassName("color");
    answer = randDiv();
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
                //fade all in
                document.getElementsByClassName("message")[0].textContent = 'YOU WIN!';
            });
        } else {
            color[i].addEventListener("click", function(){
                this.style.backgroundColor = "rgb(23, 23, 23)";
                console.log(this);
                console.log(this.style.backgroundColor);
                document.getElementsByClassName("message")[0].textContent = 'guess again';
            });
        }
    }
}

//Main Function

changeDiff(1);