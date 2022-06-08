import PostForm from "./Componenents/PostForm";
import AddForm from "./Componenents/AddForm";
import ShowForm from "./Componenents/ShowForm";
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/courses" element={<PostForm/>}/>
        <Route path="/enquiry/:id" element={<AddForm/>}/>
        <Route path="/enquiries/:id" element={<ShowForm/>}/>
        
        <Route path="*" element={<Navigate to="/courses" replace/>}/>
      </Routes>
    

    </Router>
    </>
    
  );
}

export default App;
