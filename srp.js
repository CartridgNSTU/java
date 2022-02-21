
let students = []
let id_current = 0

function load_from_site() {
	let xhr = new XMLHttpRequest();
	xhr.open ('Get', 'http://217.71.129.139:4035/students.php');
	xhr.send();

	xhr.onload = function () {
		if (xhr.status != 200) {
			alert ('Oшибка ${xhr.status}: ${xhr.statusText}');
		}
		else {
				students = JSON.parse(xhr.responseText)['response']
		}
	}
		
		xhr.onerror = function () {
			alert("Запрос не удался");
		};
}
function load_all() {
		let table = document.getElementById('tbl_al')
		for (let i = 0; i < students.length; i++){
		let id =  students[i].id
		let name =  students[i].name
		let surname =  students[i].surname
	//создадим строку и 3 ячейки
	 let tr = document.createElement('tr')
	let td1 = document.createElement('td')
	let td2 = document.createElement('td')
	let td3 = document.createElement('td')
	//запишем данные в ячейки
	td1.textContent = id
	td2.textContent = name
	td3.textContent = surname
	//вставим ячейки в строку
	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td3)
	//вставим строку в таблицу
	table.appendChild(tr)
}
	}

let name = document.getElementById('name')
function load_student(id){
	let head = document.getElementById('zagolovok')
	head.textContent = "Информация о студенте №" + students[id].id
	let name = document.getElementById('name')
	name.textContent =" "+ students[id].name
	let surname = document.getElementById('surname')
	surname.textContent = " "+students[id].surname
	let scores = document.getElementById('scores')
	let sum = 0
	for (let i = 0; i <students[id].scores.length; i ++) {
		//console.log(students[id].scores[i]);
		sum = sum  + students[id].scores[i]
	}
		console.log(sum);
scores.textContent = students[id].scores
let srscores = document.getElementById('srscores')
let sr = sum/5;
srscores.textContent = sr

let logo = document.getElementById('logo').src='http://217.71.129.139:4035/' + students[id].logo



}
let idk = 0;
function next() {
	idk++;
	if (idk > 0 ) {document.getElementById('btn_prev').disabled = false;}
	if ( idk === students.length-1) {
		document.getElementById("btn_next").disabled = true;
	}
	load_student(idk)
}
function prev() {
	idk=idk -1;
	if (idk < students.length ) {document.getElementById('btn_next').disabled = false;}
	if (idk === 0){
		document.getElementById('btn_prev').disabled = true;
	}
	load_student(idk)
}
