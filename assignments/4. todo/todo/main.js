let input=document.querySelector('input');
let ul=document.querySelectorAll('ul');
let active=document.createElement('button');
let completed=document.createElement('button');
let all = document.createElement('button');
active.textContent="Active";
completed.textContent="Completed";
all.textContent="All";
document.body.append(active,completed,all)

input.addEventListener('keyup',function(e){
    let text=input.value;
    if(event.keyCode===13 && text.trim().length !=0){         
        let li=document.createElement("li");
        let p =document.createElement("p");
        let checkbox=document.createElement("input");
        let button=document.createElement("button");
        button.classList.add('btn');
        checkbox.type="checkbox";
        checkbox.classList.add("round");
        p.textContent=text;
        p.style.display="inline-block"
        button.textContent="X";
        li.append(checkbox,p,button);
        ul.append(li);
        input.value="";

        document.querySelectorAll('.btn').forEach(item =>{
            item.addEventListener('click',event => {
                let remove = event.target.parentNode;
                let parentNode = remove.parentNode;
                parentNode.removeChild(remove);
         })
     })
     document.querySelectorAll('.round').forEach(item=>{
        item.addEventListener('click',event =>{
            if(checkbox.checked==true){
                p.style.textDecoration="line-through"
            }   else{
                p.style.textDecoration='none'
            }
        })
    })
   
    }
})


// document.querySelector('.btn').addEventListener('click', function(e){
//     let remove = e.target.parentNode;
//     let parentNode = remove.parentNode;
//     parentNode.removeChild(remove);
// })

// document.querySelectorAll('.btn').forEach(item =>{
//     item.addEventListener('click',event => {
//         let remove = event.target.parentNode;
//         let parentNode = remove.parentNode;
//         parentNode.removeChild(remove);
//     })
// })