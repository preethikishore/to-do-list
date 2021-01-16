$(document).ready(function(){
    //Add Tasks
    let addbutton = $('.addbutton');
    let feild = $('.addfield');
    let tasks = $('.tasks');

    addbutton.on('click', function(){
        let elem = `  <li class="task">
        <div class="tasks-checked col-1">
          <input type="checkbox">
        </div>
        <div class="tasks-text col-2">${feild.val()}</div>
        <div class="tasks-remove col-3"> </div>
    </li>`;
    tasks.append(elem);
    feild.val('');
    })

    
    tasks.on('click','.tasks-remove',function(){
      $(this).parent().remove();

    })

    //checked
    
    tasks.on('change','.tasks-checked input',function(){
       $(this).parent().next().toggleClass('tasks-checked');
    })

    $('#tasks-list').sortable();
})