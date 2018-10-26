 window.onload = init;

 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             let buton1 = document.createElement("button");
             let buton2 = document.createElement("button");

             element.innerText = task;
             element.appendChild(buton1);
             element.appendChild(buton2);

            var t = document.createTextNode("DONE");
            var c = document.createTextNode("DELETE");
            buton1.appendChild(t);
            buton2.appendChild(c);

            buton1.addEventListener("click",function(){element.style.textDecoration = "line-through";});
            buton2.addEventListener("click",()=>{element.parentNode.removeChild(element);});
             /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });*/
             /*element.addEventListener("click", function(){
                console.log(this);
                let parent = this.parentNode;
                if(parent){
                    parent.removeChild(this);
                }
             });*/
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task,
                     
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task,
                     
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(form.task.value, form.important.checked);

     });
 }