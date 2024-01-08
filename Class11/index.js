const username = document.querySelector('input');

const btnRef = document.querySelector('button');

btnRef.addEventListener('click', function(e) {
    console.log(username.value);
})