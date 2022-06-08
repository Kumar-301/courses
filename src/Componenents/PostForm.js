import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getCourses } from '../config/Myservice';


export default function CoursesList() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getCourses()
    .then(res=> setCourses(res.data))
    .catch(err=> console.log(err))
  
   
  }, [])
  const goToEnquiry = (id)=>{
    navigate("/enquiry/"+id)

  }  

  const showEnquiry = (id)=>{
    navigate("/enquiries/"+id)

  }
  
  
  return (

    <>
    <h2>Courses Availble</h2>
    <table className="table">
      <thead>
        <tr>
          <th>
            Title
          </th>
          <th>
            Enquiry
          </th>
          <th>
            Show Enquiry
          </th>
        </tr>
      </thead>
      <tbody>
        {
          courses.map(c=>{
            return (
              <tr key={c.id}>
                <td>
                  {c.title}
                </td>
                <td>
                  <input type="button" value=" add Enquiry" onClick={() => goToEnquiry(c.id)}/>
                </td>
                <td>
                  <input type="button" value="show Enquiry" onClick={() => showEnquiry(c.id)}/>
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
