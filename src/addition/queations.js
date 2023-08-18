import React, { useState } from 'react';

const ProductItem = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: 0,
    price: null, // Set the initial price to 70
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === 'quantity') {
      const quantity = parseInt(value);
      const item = items[index];

      setItems((prevItems) =>
        prevItems.map((prevItem, i) =>
          i === index ? { ...prevItem, [name]: quantity, totalPrice: quantity * item.price } : prevItem
        )
      );
    } else {
      setItems((prevItems) =>
        prevItems.map((prevItem, i) =>
          i === index ? { ...prevItem, [name]: value, totalPrice: prevItem.quantity * prevItem.price } : prevItem
        )
      );
    }
  };

  const handleAddItem = () => {
    setItems([...items, { ...newItem, totalPrice: newItem.price * newItem.quantity }]);
    setNewItem({ name: '', quantity: 0, price: 70 }); // Reset the newItem state
  };

  const handleRemoveItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="number"
              name="price"
              value={item.price}
              onChange={(e) => handleChange(e, index)}
            />
            <span>Total: {item.totalPrice}</span>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: {calculateTotalPrice()}</p>
    </div>
  );
};

export default ProductItem;
