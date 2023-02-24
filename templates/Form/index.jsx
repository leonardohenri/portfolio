import { Form } from "../../components/Form"
import "./form.css"

export const FormPage = () =>{
  return(
    <div className="formbody">
      <div className="formcontainer">
        <div className="formcoluna1">
        <h1>learn to code by watching others</h1>
        <p>
          see how experienced developers solve problems in real-time watching scripted tutorial is great, but understanding how developers think is invaluable.
        </p>
        </div>
        <div className="formcoluna2">
          <div className="formcontainertest">
          <p>Try it free 7 days then $20/mo. threafter</p>
          </div>
        <Form/>
        </div>
      </div>
    </div>
  )
}