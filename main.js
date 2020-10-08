//fetch request the data on the website (pTags - maybe headers)
//store all the ptags in the variables

//build object with keywords and replacements to iterate through
//document.body.innerHTML = document.body.innerHTML.replace(/hello/gi, 'hi')

const obj = {
    Pence: "Irrevelant",
    debate: "Carnival",
    Trump: "Orange",
    Politics: "jokes",
    court: "Nachos",
    ballots: "ballots DO YOUR CIVIC DUTY AND VOTE",
    election: "Hunger Games",
    policy: "puppies",
    policies: "puppies",
    "Joe Biden": "Joe Shmoe Biden",
    Stock: "fish",
    stocks: "fish",
    census: "tacos",
}

// Instead of using the / regex / g syntax, you can construct a new RegExp object:

// var replace = "regex";
// var re = new RegExp(replace, "g");
// // You can dynamically create regex objects this way.Then you will do :

// "mystring".replace(re, "newstring");



//massive function: 
//iterate through object
//replace all the words with our values

for (let x in obj) {
    let toBeRemoved = new RegExp(x, "gi")
        // let toReplaceWith = new RegExp(obj[x])
    document.body.innerHTML = document.body.innerHTML.replace(toBeRemoved,
        obj[x])

}



//have an alert that says the page is about 2020
//replace certain words with pictures
//button to toggle on/off

// add icon

// user options
// Saves options to chrome.storage

function save_options() {
    let removed = document.getElementById('remove').value;
    let replaceWith = document.getElementById('replace').value;
    obj[removed] = replaceWith;
    // replaceWords();
    let toBeRemoved = new RegExp(removed, "gi")
        // let toReplaceWith = new RegExp(obj[x])
    document.body.innerHTML = document.body.innerHTML.replace(toBeRemoved,
        replaceWith)
}
document.getElementById('save').addEventListener('click',
    save_options);

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
// function restore_options() {
//     // Use default value color = 'red' and likesColor = true.
//     chrome.storage.sync.get({
//         favoriteColor: 'red',
//         likesColor: true
//     }, function(items) {
//         document.getElementById('color').value = items.favoriteColor;
//         document.getElementById('like').checked = items.likesColor;
//     });
// }
// document.addEventListener('DOMContentLoaded', restore_options);