document.querySelector('#push').onclick = function(){
    if(document.querySelector('#new-task input').value.length == 0) {
        alert("Please Enter your Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskname">
            ${document.querySelector('#new-task input').value}
        </span>
        <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for( let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll(".task");
        for(let i=0; i<tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#new-task input").value = "";
    }
}