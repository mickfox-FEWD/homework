// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const toDoList = document.querySelector('.component-simple-to-do-list');
  const toDoListModal = document.querySelector('#itemModal');
  const toDoListForm = toDoList.querySelector('#to-do-list-form');
  const toDoListSubmit = toDoList.querySelector('#submit-btn');
  let itemId = 0; // row ID for each to-do item


  let toDoListFormData = new FormData(toDoListForm, toDoListSubmit);

  function getFormData() {
    // using FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
    toDoListFormData = new FormData(toDoListForm, toDoListSubmit); // update with latest from data
    let toDoListLocalFormData = {};
    for (let [key, value] of toDoListFormData) {
      if (toDoListLocalFormData.hasOwnProperty(key)) {
        value += ',' + toDoListLocalFormData[key];
      }
      toDoListLocalFormData[key] = value;
    }
    return toDoListLocalFormData;
  }

  function renderToDoListContainer(toDoItem) {
    const itemsContainer = toDoList.querySelector('#to-do-items-container');

    console.log('renderToDoListContainer');
    console.log(toDoItem);
   
    if (toDoItem) {
      switch (toDoItem['modalAction']) {
        case "add":
          let outputHtml = `<tr id="item${++itemId}" class="to-do-item">
            <td data-modal-action="edit" data-field="title">${toDoItem['title']}</td>
            <td data-modal-action="edit" data-field="description">${toDoItem['description']}</td>
            <td data-modal-action="edit" data-field="priority">${toDoItem['priority']}</td>
            <td><button class="btn btn-danger" type="button" data-modal-action="delete">Delete</button></td>
          </tr>`;
          itemsContainer.innerHTML += outputHtml;
          break;
        case "edit":
          const rowToUpdate = toDoList.querySelector('#' + toDoItem.itemId);
          rowToUpdate.querySelector('td[data-field="title"').innerHTML = toDoItem['title'];
          rowToUpdate.querySelector('td[data-field="description"').innerHTML = toDoItem['description'];
          rowToUpdate.querySelector('td[data-field="priority"').innerHTML = toDoItem['priority'];
          break;
        default:
          // do nothing  
      }

    }
  }

  function getItemData(rowEl){
    const rowItem = rowEl.parentNode;
    const rowFields = rowItem.querySelectorAll("td[data-field]");
    let itemData = {};
    Array.from(rowFields).forEach(field => {
      itemData[field.dataset.field] = field.innerHTML;
    });
    itemData['id'] = rowItem.id;
    return itemData;
  }

  function resetModalForm() {
    toDoListForm.querySelector('#title').value = "";
    toDoListForm.querySelector('#description').value = "";
    toDoListForm.querySelector('#priority').value = "";
    toDoListModal.querySelector('#itemModalLabel').innerHTML = 'Add To-Do Item';
    toDoListForm.querySelector('#modalAction').value = "add";
    toDoListForm.querySelector('#itemId').value = "";
  }

  function init() {
    renderToDoListContainer();
    // modal event handler (open/show)
    const phModalEl = document.getElementById('itemModal')
    phModalEl.addEventListener('show.bs.modal', event => {
        console.log("itemModal show has been clicked");

        const action = event.relatedTarget.dataset.modalAction;
        switch (action) {
          case "add":
            resetModalForm();
            break;
          default:
            // do nothing  
        }
    });

    // submit event handler
    toDoListForm.addEventListener('submit', (event) => {
      console.log("submit");
      event.preventDefault();
      const newToDoItem = getFormData();
      renderToDoListContainer(newToDoItem);
      const toDoListModalInstance = bootstrap.Modal.getInstance(toDoListModal) // Returns a Bootstrap modal instance
      console.log(toDoListModalInstance);
      toDoListModalInstance.hide(); // hide the modal after the submit button has been clicked
    });

    // reset event handler
    toDoListForm.addEventListener('reset', (event) => {
      console.log("reset");
      resetModalForm();
    });

    // event handlers
    const toDoLists = toDoList.querySelector('.component-simple-to-do-list__items');
    console.log(toDoLists);
    if (toDoLists) {
      toDoLists.addEventListener('click', (event) => {
        let action = event.target.dataset.modalAction;
        console.log("action:", action);
        switch (action) {
          case "delete":
            event.target.closest('tr').remove(); // delete item/row from table
            break;
          case "edit":
            console.log("Edit item");
            const itemData = getItemData(event.target);
            console.log(itemData);
            // update modal with item data
            toDoListForm.querySelector('#title').value = itemData['title'];
            toDoListForm.querySelector('#description').innerHTML = itemData['description'];
            toDoListForm.querySelector('#priority').value = itemData['priority'];
            toDoListModal.querySelector('#itemModalLabel').innerHTML = 'Edit To-Do Item';
            toDoListForm.querySelector('#modalAction').value = 'edit';
            toDoListForm.querySelector('#itemId').value = itemData['id'];

            // display the modal
            const toDoListModalInstance = bootstrap.Modal.getInstance(toDoListModal) // Returns a Bootstrap modal instance
            console.log(toDoListModalInstance);
            toDoListModalInstance.show(); // show the modal after the row has been clicked to edit it
          default:
            // do nothing  
        }
      });
    }

  }

  window.addEventListener("load", (event => {
    init();
  }));

})();
