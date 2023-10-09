
import './App.css';
import { useFormik } from 'formik';
import axios from 'axios';

function App() {
const form = useFormik({
  initialValues:{
    id:"",
    name:"",
  },onSubmit:(values)=>{console.log(values)
  axios.post("http://localhost:3001",values).then(res=>{
    alert("saved")
  })}
})
const {values,handleChange,handleSubmit} = form;
return(
  <div className='App'>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">id</label><br />
      <input type="text" name='id' values={values.id} onChange={handleChange}/><br />
      <label htmlFor="">name</label><br />
      <input type="text" name='name' values={values.name} onChange={handleChange}/><br />
      <button type='submit'> submit</button>
    </form>
  </div>
)


}

export default App;
