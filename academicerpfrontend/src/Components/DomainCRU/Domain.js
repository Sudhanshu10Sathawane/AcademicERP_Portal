import React, { useEffect, useState } from 'react'
import './Domain.css'
import { useNavigate } from 'react-router-dom';
const Domain = () => {
    const [domains,setDomains]=useState([]);
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();
    const handleModifyClick = (domainId) => {
  navigate(`/domain-modify/${domainId}`);
};
    useEffect(()=>{
        const fetchDomains=async()=>{
            try {
        const response = await fetch('http://localhost:8080/api/all/domain');
        // const response = await fetch('http://192.168.1.2:8080/api/all/students');
        // const response2 = await fetch('http://192.168.1.2:8080/api/all/domain');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDomains(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Domain data:', error);
        setLoading(false);
      }
    };
    fetchDomains();
  }, []); 
  /*batch
capacity
domainId
program
qualification */
  return (
    <div>
      <h1>Domain List</h1>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (<>
        <table className='table'>
        <thead>
          <tr>
            <th>Domain Id</th>
            <th>Batch</th>
            <th>Capacity</th>
            <th>Program</th>
            <th>Qualification</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
        {domains.map((domain) => (
              <tr>
                  <td>{domain.domainId}</td>
                  <td>{domain.batch}</td>
                  <td>{domain.capacity}</td>
                  <td>{domain.program}</td>
                  <td>{domain.qualification}</td>
                  <td><button className='modify' onClick={()=>handleModifyClick(domain.domainId)}>Modify</button></td>
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

export default Domain
