let listNode = document.querySelector(`.list-group`);
let newTodoInput = document.querySelector(`.form-control`);
let addButton = document.querySelector(`.btn`);

addButton.addEventListener(`click`, function(evt) {
	listNode.innerHTML +=`
	<li class="list-group-item">${newTodoInput.value}</li>`;
	newTodoInput.value = ``;
});

listNode.addEventListener(`click`, function(evt) {
	let item = evt.target;

	item.classList.toggle(`text-decoration-line-through`);
	item.classList.toggle(`list-group-item-secondary`);
});
