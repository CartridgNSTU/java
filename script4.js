let students = []
let id_current = 0

// загружаем информацию с сайта
function load_from_site() {
	// 1. Создаём новый XMLHttpRequest-объект
	let xhr = new XMLHttpRequest();
	// 2. Настраиваем его: GET-запрос по URL http://217.71.129.139:4035/students.php
	xhr.open('GET', 'http://217.71.129.139:4035/students.php');
	// 3. Отсылаем запрос
	xhr.send();
	// 4. Этот код сработает после того, как мы получим ответ сервера
	xhr.onload = function() {
	  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
	    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
	  } 
	  else { // если всё прошло гладко, выводим результат
	    students = JSON.parse(xhr.responseText)['response']
	  }
	};
	xhr.onerror = function() {
	  alert("Запрос не удался");
	};
}

function load_all() {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname
		
		// создадим строку и 3 ячейки
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')

		// запишем данные в ячейки
		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname

		// вставим ячейки в строку
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);

		// вставим строку в таблицу
		table.appendChild(tr)
	}
}

function load_student(id) {
	let head = document.getElementById('zagolovok')
	head.textContent = 'Информация о студенте № ' + students[id].id

	document.getElementById('name').textContent = students[id].name
	document.getElementById('surname').textContent = students[id].surname
}

function next() {
	id_current++
	if (id_current > 0) document.getElementById('btn_prev').disabled = false
	if (id_current === students.length-1) {
		document.getElementById('btn_next').disabled = true
	}
	load_student(id_current)
}