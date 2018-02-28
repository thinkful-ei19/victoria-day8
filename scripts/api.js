const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/victoria';

  function getItems(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  }

  function createItem(name, callback) {
    const newItem = JSON.stringify({
      name: name
    });
    const payload = {
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    }
    $.ajax(payload);
  }

  function updateItem(id, updateData, callback) {
    const update = {
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    };
    $.ajax(update);
  }

  return {
    getItems: getItems,
    createItem: createItem,
    BASE_URL: BASE_URL,
    updateItem: updateItem
  };
})();
api;
