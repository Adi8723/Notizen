let names = ['Adi shar', 'Ainush Tashtan']
let phoneNumbers = ['1223453', '345345345']


load()

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>My contact</h1>`
    content.innerHTML += ` <input type="text" placeholder="Name" id="name">
    						<input type="number" placeholder="Phone-number" id="number">
    						<button onclick="Add()">Add Contact</button>`
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phone = phoneNumbers[i];
        if (name === '') {
            alert('bitte fügen Sie name ein')
        }
        if (number == '') {
            alert('bitte fügen Sie nummer ein')
        } else {

            content.innerHTML += `
			<div class="card">
			<div>
					 <b>Name: </b>${name} <br> 
					<b> PhoneNumber: </b> ${phone} <br>
				</div>

				<div>
					<button onclick="Delete(${i})">Delete</button>
				</div>
			 
		</div>`
        }

    }
}

function Add() {
    let name = document.getElementById('name').value;
    let number = +document.getElementById('number').value;
    names.push(name)
    phoneNumbers.push(number)
    render();
    save();

}

function Delete(i) {
    names.splice(i, 1)
    phoneNumbers.splice(i, 1)
    render()
    save();

}

function save() {
    let namesAsText = JSON.stringify(names);
    localStorage.setItem('names', namesAsText);

    let NumbersAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('Numbers', NumbersAsText);
}

function load() {
    let namesAsText = localStorage.getItem('names');
    let NumbersAsText = localStorage.getItem('Numbers');

    if (namesAsText && NumbersAsText) {

        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(NumbersAsText);
    }
}