
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import MuiForm from "./MuiForm/MuiForm";
import "./App.css"
interface IFormData {
  email:string,
  password:string
}

const formSchema = yup.object({
  email : yup.string().required("this field is req"),
  password : yup.string().required("this field is req"),
})

const App = () => {
    const {register , handleSubmit,formState:{errors}} = useForm<IFormData>({
      resolver : yupResolver(formSchema),
    })
    const handleForm = (data:IFormData) =>{
      console.log(data)
    }
    return ( 
      <div>
        <form className="form" onSubmit={handleSubmit(handleForm)}>
            <input {...register('email')}/>
            <br />
            {errors.email?.message}
            <br /><hr />
            <input {...register('password')}/>
            <br />
            {errors.password?.message}
            <br />
            <input type="submit" />
        </form>
        <br />
        <br />
        <br />
        <br />
        <MuiForm/>
      </div>
     );
}
 
export default App;
