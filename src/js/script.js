//phone check
let isPhoneText = document.getElementById('isPhoneText');
let menu = document.getElementById('menu');

function isPhone() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		menu.style.display = 'none';
		isPhoneText.style.display = 'block';
		isPhoneText.textContent = 'Sorry, please use a PC to use this site :(';
	} else {
		menu.style.display = 'block';
		isPhoneText.style.display = 'none';
	}
}
isPhone();
