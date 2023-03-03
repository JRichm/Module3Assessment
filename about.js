console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfull!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById('cat-picture').addEventListener('mouseover', () => {
	alert('I like your attention to detail!')
})