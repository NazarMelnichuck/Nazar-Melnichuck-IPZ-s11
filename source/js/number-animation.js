let numbers = document.querySelectorAll('.number')

numbers.forEach(function (number) {
	let numberTop = number.getBoundingClientRect().top
	let start = +number.innerHTML
	let end = +number.dataset.max

	window.addEventListener('scroll', function onScroll() {
		if (window.scrollY > numberTop - window.innerHeight) {
			this.removeEventListener('scroll', onScroll)
			let interval = setInterval(function () {
				number.innerHTML = ++start
				if (start === end) {
					clearInterval(interval)
				}
			}, 0)
		}
	})
})
