// Saves options to chrome.storage

function save_options() {
    let removed = document.getElementById('remove').value;
    let replaceWith = document.getElementById('replace').value;
    // chrome.storage.sync.set({
    obj[removed] = replaceWith;
    // }, function() {
    //     // Update status to let user know options were saved.
    //     let status = document.getElementById('status');
    //     status.textContent = 'Options saved!';
    //     setTimeout(function() {
    //         status.textContent = '';
    //     }, 750);
    // })


}
document.getElementById('Submit').addEventListener('click',
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