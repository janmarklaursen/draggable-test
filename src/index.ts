import Sortable from 'sortablejs';

//alert('hello from github and jsdelovr');

new Sortable(example1, {
  group: {
    name: 'shared',
  },
  onStart: function (/**Event*/ evt) {
    // same properties as onEnd
    const tempoo = evt.oldIndex;
    console.log(tempoo);
    put: false; // Do not allow items to be put into this list
  },
  filter: '[sortable-data=undraggable]',
  animation: 150,
  fallbackOnBody: true,
  ghostClass: 'drag-active-class',
});

new Sortable(example2, {
  group: 'shared',
  filter: '[sortable-data=undraggable]',
  animation: 150,
  fallbackOnBody: true,
  ghostClass: 'drag-active-class',
});

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer f3a673a5291ce215460c65dfd7f06cadeebc9cf3df76df896ce9785b3cdf701d',
  },
};

window.addEventListener('load', function () {
  fetch('https://x8ki-letl-twmt.n7.xano.io/api:2U1OqiwF/user', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
});

/*

// Vanilla JS - GET
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users', true);
xhr.onload = function () {
  console.log(xhr.responseText);
};
xhr.send(null);
*/
