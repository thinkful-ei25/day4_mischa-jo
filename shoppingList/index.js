'use strict';
// form input adds new item to bottom of list / appends to DOM
//  - ID/find form inputted text  ==== -----
//  - listen for click OR keydown === 'enter' -----
//  - ourNewBox = createHtml(listElement) -----
//  - ul.append(ourNewBox); -------

function doItAll(){
  listInput();
  strikeButton();
  deleteButton();
}
doItAll();
//  - set input/form to default / '' 

// 'check' button toggles strikethrough 
function strikeButton(){
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  } );
}
// 'delete' button removes from DOM
function deleteButton(){
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    $(this).closest('li').remove();
  } );
}
//deleteButton();

//strikeButton();
function listInput(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const newListItem = $('.js-shopping-list-entry').val();
    const ourNewListItemHTML = createHtml(newListItem);
    $('.shopping-list').append(ourNewListItemHTML);
    event.target.reset();
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

//$(listInput);

