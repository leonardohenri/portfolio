import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.css'

const schema =  yup.object({
  name: yup.string().required('O nome é obrigatório'),
  lastName: yup.string().required('O ultimo nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter no minimo 6 digitos').required('O senha obrigatório'),
  repeatPassword: yup.string().required('repetir senha é obrigatório').oneOf([yup.ref("password")], "As senhas devem ser iguais"),
}).required();

export const Form = () =>{
  const {register , handleSubmit, formState: {errors}} = useForm({
   resolver: yupResolver(schema) 
  });

 const onSubmit = (userData) =>{
  
 }

return(
    <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
    <input {...register('name', {required:true})} placeholder='Name' />
    {errors.name && <span className="error">{errors.name?.message}</span>}
    <input {...register('lastName', {required:true})} placeholder='Last Name'/>
    {errors.lastName && <span className="error">{errors.lastName?.message}</span>}
    <input {...register('email', {required:true})} placeholder='Email Address'/>
    {errors.email && <span className="error">{errors.email?.message}</span>}
    <input {...register('password', {required:true})} placeholder='Password'/>
    {errors.password && <span className="error">{errors.password?.message}</span>}
    <input {...register('repeatPassword', {required:true})} placeholder='Repeat Password'/>
    {errors.repeatPassword && <span className="error">{errors.repeatPassword?.message}</span>}

    <button type="submit" >CLAIM YOUR FREE TRIAL</button>
    <div className="teste"><p>By clicking the button. you are agreeing to our <span className='terms'>Terms and Services</span></p></div>
    
  </form >
);


}

