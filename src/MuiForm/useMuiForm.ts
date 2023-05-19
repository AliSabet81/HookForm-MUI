import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IFormData } from "./types";

const useMuiForm = () => {
    const FormSchema = yup.object({
        username: yup.string().required(),
        password: yup.string().required().min(8),
    })
    const [passwordType,setPasswordType] = useState<'password' | 'text'>('password')

    const {register,handleSubmit,formState:{errors}} = useForm<IFormData>({
        resolver : yupResolver(FormSchema),
        mode:'onSubmit'
    })

    const handleFormUser = useCallback(
        (data:IFormData) =>{
        console.log(data)
    },[])

    return {
        handleFormUser,
        register,
        handleSubmit,
        errors,
        passwordType,
        setPasswordType
    }
}
 
export default useMuiForm;