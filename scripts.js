let novoItem = (tarefa, status = '') => {
    let item = document.createElement('label');
    item.classList.add('adicionar_item');
    item.innerHTML = `<input type="checkbox" ${status}>
                      <div>${tarefa}</div>
                      <input type="button" value="X">
    `
    document.getElementById('novoItem').appendChild(item);
}

var task = 0

function newObject() {
    let item = document.createElement('label')
    var tarefa = document.getElementById('novoItem').value
    var data = document.getElementById('data').value
    item.classList.add('adicionar_item')
    item.id = `id${++task}`
    item.innerHTML = `<input type="checkbox" id="check${task}">
                        <div><span>${tarefa}</span></div>
                        <div><span>${data}</span></div>
                        <input type="button" value="X" onclick="deleteObject(${task})">
`
    document.getElementById('list').appendChild(item)
}

function deleteObject(id) {
    var item = document.getElementById(`id${id}`)
    item.remove()
}

function changeTheme() {
    var bgnd = document.getElementById('conteudo')
    var bgndNewItem = document.getElementById('newItem')
    var title = document.querySelector('.title')
    var footer = document.querySelector('footer span')
    var color = document.getElementById('colortheme').value
    bgnd.style = `background-color: ${color}`
    bgndNewItem.style = `background-color: ${color}`
    title.style = `color: ${color}`
    footer.style = `color: ${color}`
}

function completeTask(id) {
    var task = document.getElementById(`check${id}`)
    var text = document.querySelector('.adicionar_item span')
    if (task.checked == true) {
        console.log('ok')
        text.style = 'text-decoration: line-through'
    } else {
        text.style = 'text-decoration: none'
    }
}