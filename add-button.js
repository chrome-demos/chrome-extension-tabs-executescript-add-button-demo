var button = document.createElement("button")

button.innerText = "This is the inserted button, click on me!"
button['id'] = 'inserted'
button['data-name'] = 'name1'
button.onclick = function() {
    alert('clicked!')
}
button.fun = function() {
    alert('fun!')
}

document.body.appendChild(button)

alert('Button inserted to page bottom, please scroll down the page, find and click on it.')

// scroll down the page
window.scrollTo(0, document.body.scrollHeight)