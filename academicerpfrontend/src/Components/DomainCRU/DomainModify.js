import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DomainModify.css';

const DomainModify = () => {
  const { domainId } = useParams();
  const [domain, setDomain] = useState(null);
  const [formData, setFormData] = useState({
    program: '',
    batch: '',
    qualification: '',
    capacity: '',
  });

  const [loading, setLoading] = useState(true);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  useEffect(() => {
    const fetchDomain = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/domain/${domainId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDomain(data);
        setFormData({
          program: data.program,
          batch: data.batch,
          qualification: data.qualification,
          capacity: data.capacity,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching domain data:', error);
        setLoading(false);
      }
    };

    fetchDomain();
  }, [domainId]);

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
      const response = await fetch(`http://localhost:8080/api/update/domain/${domainId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Handle success, e.g., display a success message or redirect
      setUpdateSuccess(true);
      console.log('Domain updated successfully!');
    } catch (error) {
      console.error('Error updating domain:', error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : domain ? (
        <div className='container'>
        {updateSuccess && <p className="success-message">Update successful!</p>}
        <div className="domainmodify-container">
          <form className="domain-form" onSubmit={handleSubmit}>
            <label htmlFor="program">Program:</label>
            <input
              type="text"
              id="program"
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="batch">Batch:</label>
            <input
              type="text"
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="capacity">Capacity:</label>
            <input
              type="text"
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleInputChange}
              required
            />

            <button type="submit">Update Domain</button>
          </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DomainModify;
