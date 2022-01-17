/*jshint esversion: 9 */
const switchers = [...document.querySelectorAll('.switcher')];

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'));
		this.parentElement.classList.add('is-active');
	});
});


let a = document.getElementsByClassName(".registratsiya");
let b = document.getElementsByClassName(".form-wrapper");
a.addEventListener("click", function(){
	b.classlist.toggle(".is-active");
	console.log("saolmsdfm");

	
});
