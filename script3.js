let students = []
let id_current = 0

function load_from_site() {
	//Создаём объект XMLHttpRequest
	let xhr = new XMLHttpRequest();
	//Настраиваем его: GET-запрос по ссылке http://217.71.129.139:4035/students.php
	xhr.open('Get', 'http://217.71.129.139:4035/students.php');
	//отсылаем запрос
	xhr.send();
	//далее код который сработает при ответе сервера
	xhr.onload = function(){
		if (xhr.status != 200) { //анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
			alert('Ошибка ${xhr.status}: ${xhr.statusText}');
		}
		else {//если всё без ошибок
			students = JSON.parse(xhr.responseText)['response']
		}
	}
	xhr.onerror = function() {
		alert("Запрос не удался");
	};
}
function load_all () {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i< students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname

		let tr = document.createElement('tr')
		let td1 = document.createElement('td1')
		let td2 = document.createElement('td2')
		let t3 = document.createElement('td3')

		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname



		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)

		table.appendChild(tr)
	}
}
function load_student(id){
	let head = document.getElementById('zagolovok')
	head.textContent = 'Информация о студенте № ' + students[id].id

	let name = document.getElementById('name')
	document.getElementById('name').textContent = students[id].name
	name.textContent = ' ' + students[id].name

	let surname = document.getElementById('surname')
	document.getElementById('surname').textContent = students[id].surname
	surname.textContent = ' ' + students[id].surname
}

function next() {
	id_current++
	if (id_current > 0) document.getElementById('btn_prev').disabled = false
	if (id_current === students.length-1) {
		document.getElementById('btn_next').disabled = true
	}
	load_student(id_current)
}

function prev() {
	id_current--
	if (id_current > students.length ) document.getElementById('btn_next').disabled = false
	if (id_current === 0) {
		document.getElementById('btn_prev').disabled = true
	}
	load_student(id_current)
}