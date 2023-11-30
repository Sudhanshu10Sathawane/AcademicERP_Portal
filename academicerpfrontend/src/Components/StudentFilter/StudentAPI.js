import React, { useEffect, useState } from 'react'
import './StudentAPI.css';
const StudentAPI = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [domains, setDomains]=useState([]);
    const [selectedDomain, setSelectedDomain] = useState('all');
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/all/students');
        const response2 = await fetch('http://localhost:8080/api/all/domain');
        // const response = await fetch('http://192.168.1.2:8080/api/all/students');
        // const response2 = await fetch('http://192.168.1.2:8080/api/all/domain');
        if (!response.ok && !response2.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const data2=await response2.json();
        setStudents(data);
        setDomains(data2);
        console.log(data);
        console.log(data2);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setLoading(false);
      }
    };
    /*cgpa, domainId, email, firstName, graduationYear, lastName, photographPath, rollNumber, studentId, totalCredits*/
    fetchStudents();
  }, []); 
  const findProgramById=(targetId)=> {
  const foundObject = domains.find(obj => obj.domainId === targetId);
  return foundObject ? foundObject.program : null;
  }
  const handleDomainChange = (e) => {
    setSelectedDomain(e.target.value);
  };

  const filteredStudents =
    selectedDomain === 'all'
      ? students
      : students.filter((student) => student.domainId === parseInt(selectedDomain));
  return (
   <div>
      <h1>Student List</h1>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (<>
      <div className='filter-container'>
        <label htmlFor="domainSelect">Select Domain:</label>
      <select id="domainSelect" onChange={handleDomainChange} value={selectedDomain}>
        <option value="all">All Domains</option>
        {domains.map((domain) => (
          <option key={domain.domainId} value={domain.domainId}>
            {domain.program +" "+ domain.batch}
          </option> 
        ))}
      </select>
      </div>
        <table className='table'>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Roll Number</th>
            <th>Domain</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Graduation Year</th>
            <th>Email</th>
            <th>CGPA</th>
            <th>Total Credits</th>
          </tr>
        </thead>
        <tbody>
        {filteredStudents.map((student) => (
              <tr>
                  <td className='profile-photo'>
                  <img src={student.photographPath}  alt="ProfilePhoto"/></td>
                  <td>{student.rollNumber}</td>
                  <td>{findProgramById(student.domainId)}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.graduationYear}</td>
                  <td>{student.email}</td>
                  <td>{student.cgpa}</td>
                  <td>{student.totalCredits}</td>
              </tr>
          ))
        }
      </tbody>
      </table> 
        </>
      )}
    </div>
  )
}

export default StudentAPI
