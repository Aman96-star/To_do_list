var arr = []
function form(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const data = {
        title: event.target[0].value,
        description:event.target[1].value
    }

    arr.push(data)
    // Get the form data
    const formData = new FormData(event.target);
    arr.forEach(function(elem,index){
        console.log(elem,index)
        
    })
    
}
   
var note =document.getElementsByClassName('content-2');
console.log(note);

