import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getEnquiries } from '../config/Myservice';

export default function EnquiryList() {
    const {id}=useParams();

  const [enquiries, setEnquiries] = useState([]);
  
    useEffect(() => {
        getEnquiries(id)
        .then(res=> setEnquiries(res.data))
        .catch(err=> console.log(err))
      
       
      }, [id])
  return (<>
  
    <div>EnquiryList</div>
    <table className="table">
      <thead>
        <tr>
          <th>
            name
          </th>
          <th>
            Age
          </th>
          
        </tr>
      </thead>
      <tbody>
        {
          enquiries.map(c=>{
            return (
              <tr key={c.id} >
                <td>
                  {c.name}
                </td>
                <td>
                  {c.age}
                </td>
               
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}
