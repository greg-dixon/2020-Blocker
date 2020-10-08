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
    // policy: "puppies",
    // policies: "puppies",
    "Joe Biden": "Joe Shmoe Biden",
    Stock: "fish",
    stocks: "fish",
    census: "tacos",
}

//massive function: iterate through object /replace all the words with our values
for (let x in obj) {
    if (document.body.innerHTML.includes(x)) {
        alert('WARNING: The content on this page would have horrified and disturbed you and destroyed your faith in humanity. That is why we\'ve replaced those trigger words with something much more pleasant :)')
        break
    }
}
for (let x in obj) {
    let toBeRemoved = new RegExp(x, "gi")
    document.body.innerHTML = document.body.innerHTML.replace(toBeRemoved,
        obj[x])
}

function save_options() {
    let removed = document.getElementById('remove').value;
    let replaceWith = document.getElementById('replace').value;
    obj[removed] = replaceWith;
}
document.getElementById('Submit').addEventListener('click',
    save_options);


//have an alert that says the page is about 2020
//replace certain words with pictures
//button to toggle on/off

// add icon

// user options