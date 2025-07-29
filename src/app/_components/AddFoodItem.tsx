'use client';
import React from 'react';

const AddFoodItem = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [path, setPath] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleAddFoodItem = async () => {
    setError(false);
    
    if (!name || !price || !path || !description) {
      setError(true);
      return;
    }

    try {
      setLoading(true);
      const resto = JSON.parse(localStorage.getItem('restaurant') || '{}');
      const resto_id = resto?._id;

      if (!resto_id) {
        console.error('Restaurant ID not found in localStorage');
        return;
      }

      const response = await fetch('/api/foods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          price: parseFloat(price),
          img_path: path,
          description,
          resto_id,
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Food item added successfully:', data);
        setName('');
        setPrice('');
        setPath('');
        setDescription('');
      } else {
        console.error('Failed to add food item:', data.error);
      }
    } catch (error) {
      console.error('Error adding food item:', error);
    }finally {
      setLoading(false);
    }
  };
  if(loading) return <div>Loading...</div>;
  return (
    <div className="w-full mx-auto max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Food Item</h1>

      {error && (
        <div className="text-red-500 mb-2">
          Please fill in all the fields correctly!
        </div>
      )}

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter food name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter image path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddFoodItem}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItem;
