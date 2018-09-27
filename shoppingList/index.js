'use strict';
// form input adds new item to bottom of list / appends to DOM
//  - ID/find form inputted text  ==== -----
//  - listen for click OR keydown === 'enter' -----
//  - ourNewBox = createHtml(listElement) -----
//  - ul.append(ourNewBox); -------
//  - set input/form to default / '' 



// 'check' button toggles strikethrough 
// 'delete' button removes from DOM

function listInput(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const newListItem = $('.js-shopping-list-entry').val();
    const ourNewListItemHTML = createHtml(newListItem);
    $('.shopping-list').append(ourNewListItemHTML);

  });
}

function createHtml(string){
  return `<li>
  <span class="shopping-item">${string}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`;
   
}

$(listInput);

