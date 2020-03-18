let bookArr = [];
let form = document.body.querySelector('#add-book');
let addBtn = document.body.querySelector('#add-book > button');
let hideBtn = document.body.querySelector('#add-book input[type=checkbox]');
let ulElem = document.body.querySelector('ul');
let nameField = document.body.querySelector('#add-book > input:nth-child(3)');
let searchField = document.body.querySelector('#search-books > input:first-child');
let uId = 1;
function updateUI(arr){
    ulElem.innerHTML = '';
    let str = '';
    arr.forEach(elem => {
        let liElem = document.createElement('li');
        liElem.innerHTML = elem['name'];
        let delBtn = document.createElement('button');
        delBtn.classList.add('delete');
        delBtn.innerHTML = 'DELETE';
        liElem.setAttribute('data-id', elem['id']);
        liElem.append(delBtn);
        ulElem.append(liElem)

    });
}
function resetUI(){
    ulElem.innerHTML = '';
}
updateUI(bookArr);
document.addEventListener('click', function(event){
    let addElem = event.target;
    if(addElem.matches('form>button')) {
        event.preventDefault();
        let book = {};
        book.name = nameField.value;
        book.id = uId;
        uId++;
        bookArr.push(book);
        updateUI(bookArr);
        nameField.value='';
    }
    else if(addElem.matches('li>button')) {
        event.preventDefault();
        let par = addElem.parentElement;
        if(!par)
            return;
        //console.log(par.dataset.id);
        bookArr = bookArr.filter(elem =>{
            if(elem['id'] == par.dataset.id)
                return false;
            return true;      
        })
        updateUI(bookArr);
    }
    else if(addElem.matches('header input')) {
        //event.preventDefault;
        resetUI();
    }
    else if(addElem.matches('#hide')){
        if(addElem.checked)
            ulElem.hidden = true;
        else
            ulElem.hidden = false;
    }
});

document.addEventListener('keyup', function(event){
    let addElem = event.target;
    if(!addElem.matches('header input'))
        return;
    
    let searchResult = bookArr.filter(elem =>{
        let str = addElem.value;
        if(elem['name'].toLowerCase().search(str.toLowerCase()) == -1)
            return false;
        return true;
    });
    updateUI(searchResult);
});