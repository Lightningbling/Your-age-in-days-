// Challenge 1: Age in days

function age() {

    var birthyear = prompt('Enter your birth year');
    var ages = (2021-birthyear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ages +' days old');
    h1.setAttribute('id','age');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById ('age') .remove();
}