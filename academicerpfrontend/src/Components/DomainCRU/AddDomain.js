import React, { useState } from 'react';

const AddDomain = () => {
  const [formData, setFormData] = useState({
    program: '',
    batch: '',
    qualification: '',
    capacity: '',
  });

  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('http://localhost:8080/api/add/domain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setUpdateSuccess(true);
      setFormData({
        program: '',
        batch: '',
        qualification: '',
        capacity: '',
      });
    } catch (error) {
      setError('Error adding domain. Please try again.');
      console.error('Error adding domain:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      {updateSuccess && <p className='success-message'>Added successfully!</p>}
      {loading && <p>Loading...</p>}
      {error && <p className='error-message'>{error}</p>}
      <div className='domainmodify-container'>
        <form className='domain-form' onSubmit={handleSubmit}>
          <label htmlFor='program'>Program:</label>
          <input
            type='text'
            id='program'
            name='program'
            value={formData.program}
            onChange={handleInputChange}
            required
          />

          <label htmlFor='batch'>Batch:</label>
          <input
            type='text'
            id='batch'
            name='batch'
            value={formData.batch}
            onChange={handleInputChange}
            required
          />

          <label htmlFor='qualification'>Qualification:</label>
          <input
            type='text'
            id='qualification'
            name='qualification'
            value={formData.qualification}
            onChange={handleInputChange}
            required
          />

          <label htmlFor='capacity'>Capacity:</label>
          <input
            type='text'
            id='capacity'
            name='capacity'
            value={formData.capacity}
            onChange={handleInputChange}
            required
          />

          <button type='submit'>Add Domain</button>
        </form>
      </div>
    </div>
  );
};

export default AddDomain;
