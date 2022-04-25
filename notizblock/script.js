let Titel = [];
let Notiz = [];
let Trashtitles = [];
let Trashnotes = [];

load();

function render() {

    let feald = document.getElementById('feald');
    let block = document.getElementById('block');
    feald.innerHTML = '';
    block.innerHTML = '';
    feald.innerHTML += `
		 <div class="text-fieled">
                <input type="text" placeholder="Titel" class="titel" id="titel">
                <input type="text" placeholder="Notiz schreiben..." class="notiz" id="text">
                <button onclick="Add()">Add</button>
        </div>
		`
    for (let i = 0; i < Titel.length; i++) {
        const titel = Titel[i];
        const notiz = Notiz[i]
        block.innerHTML += `
		<div class="case">
                <div>
					<h1>${titel} </h1>
                	<p>${notiz}</p>
				</div>
				<div class="delete">
					<button onclick="Delete(${i})">Delete</button>
				</div>
				
        </div>
		`

    }

}

function Add() {
    let title = document.getElementById('titel').value;
    let not = document.getElementById('text').value;
    Titel.push(title)
    Notiz.push(not)
    render();
    save()
}

function Delete(i) {
    Titel.splice(i, 1)
    Notiz.splice(i, 1)
    render();
    save()
}

function Trash1(i) {
    Trash.push(i)

    render();
    save()
}

function save() {

    let titleasText = JSON.stringify(Titel)
    localStorage.setItem('title', titleasText)

    let notizasText = JSON.stringify(Notiz)
    localStorage.setItem('notizen', notizasText)
}

function load() {
    let titleasText = localStorage.getItem('title')
    let notizasText = localStorage.getItem('notizen')

    if (titleasText && notizasText) {
        Titel = JSON.parse(titleasText)
        Notiz = JSON.parse(notizasText)
    }

}