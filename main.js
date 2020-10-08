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
    "Joe Biden": "Joe Shmoe Biden",
    Stock: "fish",
    stocks: "fish",
    census: "tacos",
    officer: "avatar"
}
const hide = (remove, replace) => {
    //massive function: iterate through object /replace all the words with our values
    obj[remove] = replace;

    for (let x in obj) {
        if (document.body.innerHTML.includes(x)) {
            alert('WARNING: The content on this page would have horrified and disturbed you and destroyed your faith in humanity. That is why we\'ve replaced those trigger words with something much more pleasant :)')
            break
        }
    }
    for (let x in obj) {
        let toBeRemoved = new RegExp(x, "gi");
        document.body.innerHTML = document.body.innerHTML.replace(toBeRemoved,
            obj[x]);
    }
}
hide();
// document.addEventListener('DOMContentLoaded', function() {
let button = document.querySelector('button')
let newRemoved
let newReplaced


button.addEventListener('click', function() {
    // let removed = document.querySelector('#remove').value;
    // let replaceWith = document.querySelector('#replace').value;
    newRemoved = $('#remove').val();
    newReplaced = $('#replace').val();
    obj[newRemoved] = newReplaced
    hide(newRemoved, newReplaced)
        // location.reload()

    // console.log(removed, replaceWith)
    // obj[newRemoved] = newReplaced;
    // alert('button clicked')
    // obj[removed] = replaceWith;
    console.log(obj)

})

obj[newRemoved] = newReplaced


// function update() {
//     let removed = document.querySelector('#remove').value;
//     let replaceWith = document.querySelector('#replace').value;
//     console.log(removed, replaceWith)
//         // alert('button clicked')
//     obj[removed] = replaceWith;
//     console.log(obj)
// }

// $('#SubmitButton').on("click", e => {
//     e.preventDefault();
//     update()

// });
// button.addEventListener('click', save_options);
// })

//have an alert that says the page is about 2020 --- DONE
//replace certain words with pictures
//button to toggle on/off

// add icon ---- DONE