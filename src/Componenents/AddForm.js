import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { addEnquiry } from '../config/Myservice';
import { useNavigate } from 'react-router-dom';
export default function Enquiry() {

    const [state,setState]=useState({name:'',age:""});
    const[error,setError]=useState(false);
    const[error2,setError2]=useState(false);
    const[text,setText]=useState("");
    const[text2,setText2]=useState("");
    const navigate = useNavigate();
const {id}=useParams()    
    const handler=(event)=>{
        let {name,value}=event.target;
        setState({...state,[name]:value});
       }

    function postAddEnquiry(event){
        event.preventDefault();
         let result=validate()
         if (result){
            addEnquiry(state,id)
            .then(res=> {
                if(res){
                    alert("Enquiry Added")
                    navigate("/courses")
                }
            })
            .catch(err=>console.log(err))
         }

    }
    const validate=()=>{
        let result1 =validate1();
        let result2=validate2();
        
        return result1&&result2;
    }
    const validate1=()=>{
        let regEx=new RegExp("^[A-Za-z]*$");
        if(state.name===""){
            setError(true)
            setText("required")
            return false
        }
        else if (!regEx.test(state.name)){
            setError(true)
            setText("name should contain only alphabets")
            return false

        }
        else{
            setText("")
            return true
        }
    }
    const validate2=()=>{
        let regEx=new RegExp("^[0-9]*$");
        if(state.age===""){
            setError2(true)
            setText2("required")
            return false
        }
        else if (!regEx.test(state.age)){
            setError2(true)
            setText2("Age should be only in digits")
            return false

        }
        else{
            setText2("")
            return true
        }
    }
  return (
    <>
    <div className="container">

     <form onSubmit={postAddEnquiry}>
            <div className='form-group'>
                <label> Name</label>
                <input type="text" className="form-control" name="name" onChange={handler} onBlur={validate1}/>
                {error?<p className='text-danger'>{text}</p>:""}
            </div>
            <div className='form-group'>
                <label> Age</label>
                <input type="text" className="form-control" name="age" onChange={handler} onBlur={validate2}/>
                {error2?<p className='text-danger'>{text2}</p>:""}
            </div>
       

            <input type="submit" value="Add" className="btn btn-success mt-3"/>
           
           
        </form>
    </div>
    </>
  )
}
