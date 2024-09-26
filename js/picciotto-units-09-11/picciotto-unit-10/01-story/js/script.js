
let makeStory = function(noun, adjective, person){
    let story;
    story = 'Many years ago, there was ' + person + ' with an ' + noun + ' . It was very ' + adjective;
    document.getElementById('story').textContent = story;
}

let  takeArguments = function () {
    let noun = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let person = document.getElementById('person').value;
    
    makeStory(noun, adjective, person);
}

let genButton = document.getElementById('gen-button');
genButton.addEventListener('click', takeArguments);