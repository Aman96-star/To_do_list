var arr = [] 

function form(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const data = {
        title: event.target[0].value,
        description:event.target[1].value
    }

    arr.push(data)
     
    const formData = new FormData(event.target);
    
    var d = ""
    
    
    
    arr.forEach((elm)=> {
        d= d +`  <div class="t1">
        <h2>${elm.title}</h2>
        <p>${elm.description}</p>
        </div>`
        
    });
    
    
    let content=document.querySelector('.tasks');
    content.innerHTML=d;
}
    
    
  