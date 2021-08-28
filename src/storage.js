const myStorage = window.localStorage;

export const addItem = async (item) => {
  let items = await getItems();
  items.push(item);
  myStorage.setItem('todos', JSON.stringify(items));
};

export const editItem = async (item, editItem) => {
  const items = await getItems();
  const editedItems = items.map((dataItem) =>
    dataItem === item ? editItem : dataItem
  );
  console.log('editeditems', editedItems);
  myStorage.setItem('todos', JSON.stringify(editedItems));
};

export const deleteItem = async (data) => {
  const items = await getItems();
  const updatedItems = items.filter((item) => {
    return item !== data;
  });
  myStorage.setItem('todos', JSON.stringify(updatedItems));
};

export const getItems = async () => {
  const items = await JSON.parse(myStorage.getItem('todos'));
  return items ? items : [];
};
