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
    item.innerHTML = `<input type="checkbox">
                        <div>${tarefa}</div>
                        <div>${data}</div>
                        <input type="button" value="X" onclick="deleteObject(${task})">
`
    document.getElementById('list').appendChild(item)
}

function deleteObject(id) {
    var item = document.getElementById(`id${id}`)
    item.remove()
}