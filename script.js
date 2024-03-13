function getFormvalue() {
    //Write your code here
	const fname = document.querySelectorAll('input[name=fname]')[0].value;
	const lname = document.querySelectorAll('input[name=lname]')[0].value;
	alert(`${fname} ${lname}`);
}
