import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/user/user-reducer';

export default function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log();
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(formData));  // Redux orqali ma'lumot qo'shish
    setFormData({ title: '', description: '' });

  };

  return (
    <form onSubmit={handleSubmit} className='my-6 mx-auto w-1/2'>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
        <input
          className='border-2 border-black w-full px-3 py-2'
          name='title'
          type='text'
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 border-2 border-black hover:bg-blue-600'
      >
        Add
      </button>
    </form>
  );
}
