
function editItem(id, name, description, price) {
  document.getElementById('updateId').value = id
  document.getElementById('updateName').value = name
  document.getElementById('updateDescription').value = description
  document.getElementById('updatePrice').value = price
  document.getElementById('updateItem').action = `/item/update/${id}`
}

async function deleteItem(id) {
  try {
    const response = await fetch(`http://localhost:3000/item/delete/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      console.log('Item deleted')
      location.reload()
    } else {
      console.log('Failed to delete item')
    }
  } catch(err) {
    console.log('An error occurred deleting: ', err)
  }
}