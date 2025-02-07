<script>
  import { onMount } from 'svelte';

  export let todos = []; // store the to do items as an array
  $: itemId = todos.length; // row ID for each to-do item. Will be updated by Svelte each time todos is updated
  let todoListModal = null;
  let editing = false;

  // modal form details
  let itemId = 0;
  let currentToDoId = 0;
  let newTodoTitle = "";
  let newTodoDescription = "";
  let newTodoPriority = "";

  const getModalInstance = () => {
    const toDoListModalEl = document.querySelector('#itemModal');
    return bootstrap.Modal.getOrCreateInstance(toDoListModalEl);
  }

  const resetModalData = () => {
    console.log("resetModalData");
    newTodoTitle = "", newTodoDescription = "", newTodoPriority = ""; 
  }

  function removeTodo(todo) {
    console.log("removeToDo clicked");
    todos = todos.filter((t) => t.id !== todo.id);
  }

  function addTodo() {
    console.log("addToDo clicked:", editing);

    if (editing) { // editing existing todo item
      todos[currentToDoId].title = newTodoTitle;
      todos[currentToDoId].description = newTodoDescription;
      todos[currentToDoId].priority = newTodoPriority;
      editing = false;
    } else { // adding new todo item
      currentToDoId = itemId++;
      // option 1
      //todos.push({ id: currentToDoId, title: newTodoTitle, description: newTodoDescription, priority: newTodoPriority });
      //todos = todos; // trigger the UI to update

      // option 2 using the spread operator
      todos = [...todos, { id: currentToDoId, title: newTodoTitle, description: newTodoDescription, priority: newTodoPriority }];
    }

    resetModalData();
    todoListModal.hide(); // hide the modal
  }

  function editTodo(todoId) {
    console.log("editToDo:", todoId);
    editing = true;
    currentToDoId = todoId;
    newTodoTitle = todos[todoId].title;
    newTodoDescription = todos[todoId].description;
    newTodoPriority = todos[todoId].priority;
    todoListModal.show(); // show the modal
  }

  onMount( () => {
    try {
      console.log("onMount");
      todoListModal = getModalInstance();
      console.log(todoListModal);
    } catch (error) {
        console.error('Error:', error);
    }
  });

</script>

<section class="component-simple-to-do-list container py-5">
  <h2>To Do List</h2>
  <div class="container component-simple-to-do-list__items">
    <table class="table table-striped">
      <thead>
        <th>Title</th><th>Description</th><th>Priority</th>
      </thead>
      <tbody id="to-do-items-container">
        {#each todos as todo, index (todo.id)}
          <tr id="{todo.id}" class="to-do-item">
            <td on:click={editTodo(todo.id)}>{todo.title}</td>
            <td on:click={editTodo(todo.id)}>{todo.description}</td>
            <td on:click={editTodo(todo.id)}>{todo.priority}</td>
            <td><button class="btn btn-danger" type="button" data-modal-action="delete" 
              on:click={() => removeTodo(todo)}
              >Delete</button></td>
          </tr>
          {:else}
            Nothing to do here!
          {/each}
      </tbody>
    </table>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#itemModal" data-modal-action="add">
      Add item
    </button>
  </div>
  <!-- Modal -->
<div on:hidden.bs.modal={resetModalData} class="modal fade" id="itemModal" tabindex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="itemModalLabel">Add To-do Item</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form id="to-do-list-form" on:submit|preventDefault={addTodo}> 
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input bind:value={newTodoTitle} type="text" class="form-control" id="title" name="title" placeholder="Enter title of item" required />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea bind:value={newTodoDescription} id="description" name="description" rows="5" class="w-100" placeholder="Enter item description"></textarea>
          </div>
          <div class="mb-3">
            <label for="priority" class="form-label">Priority</label>
            <select bind:value={newTodoPriority} class="form-select" id="priority" name="priority" aria-label="Default select to-do-list-form" required>
              <option value="">Select the priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div class="row">
          </div>
        </div>
        <div class="modal-footer">
          <input bind:value={currentToDoId} id="itemId" type="hidden" name="itemId" />
          <input id="reset-btn" type="reset" value="Clear" class="btn btn-secondary mb-3" />   
          <input id="submit-btn" type="submit" value="Submit" class="btn btn-primary mb-3" />
        </div>
      </form>
    </div>
  </div>
</div>
  <div class="container component-simple-to-do-list__form"></div>
</section>

<style>
  .component-simple-to-do-list {
    min-height: 200px;
  }
</style>
