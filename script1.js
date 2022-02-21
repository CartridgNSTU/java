let students = [
{id: 1, name: 'Андрей', surname: 'Артамонов'},
{id: 2, name: 'Дарья', surname: 'Архипова'},
{id: 3, name: 'Николай', surname: 'Баркалов'},
{id: 4, name: 'Георгий', surname: 'Бочкарёв'},
{id: 5, name: 'Матвей', surname: 'Гаврилов'},
]
for (let i = 0; i< students.length; i++) {
	let id = students[i].id
	let name = students[i].name
	let surname = students[i].surname
	console.log('Номер: ' +id)
	console.log('Имя: ' + name)
	console.log('Фамилия: ' + surname)
	console.log('______________________')
}