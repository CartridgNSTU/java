let students = [
{id: 1, name: 'Андрей', surname: 'Артамонов'},
{id: 2, name: 'Дарья', surname: 'Архипова'},
{id: 3, name: 'Николай', surname: 'Баркалов'},
{id: 4, name: 'Георгий', surname: 'Бочкарёв'},
{id: 5, name: 'Матвей', surname: 'Гаврилов'},
]

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

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);

		table.appendChild(tr)
}