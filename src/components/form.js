import { useState, useEffect } from "react";
import "./form.css"

function Form() {
  const initialValues = { username: "", email: "", dob: "" ,country:"",phonenumber:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

useEffect(()=>{
    localStorage.setItem("form",JSON.stringify(formValues))
},[formValues])

  

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert(JSON.stringify(formValues));
      
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.dob) {
      errors.dob = "DOB is required";
    } else if (values.dob.length < 10) {
      errors.dob = "DOB must be in dd/mm/yyyy";
    } else if (values.dob.length > 10) {
      errors.dob = "DOB cannot exceed more than 10 characters";
    }
    if (!values.country) {
        errors.country = "Country is required";
      } else if (values.country===Number) {
        errors.country = "Country must be Alphabet";
      } 

      if (!values.phonenumber) {
        errors.phonenumber = "Phone Number is required";
      } else if (values.phonenumber.length<10) {
        errors.country = "Phone Number must be 11 number";
      }else if (values.phonenumber.length > 11) {
        errors.dob = "Phone Number cannot exceed more than 11 numbers";
      }
    return errors;
  };

  return (
    <div className="container">

        <div className="logodiv">
            <img src="https://w7.pngwing.com/pngs/648/297/png-transparent-man-wearing-gray-suit-jacket-shah-rukh-khan-baadshah-actor-bollywood-shahrukh-khan-celebrities-blue-king-thumbnail.png" alt="Avatar" className="profileimg">
            </img>
            <div className="pencildiv">
                <img src='https://img.icons8.com/pastel-glyph/2x/pencil--v2.png'  ></img>

            </div>

        </div>

      <form onSubmit={handleSubmit} className='form'>
               
            <div className="topname">Samuel_ceaser</div>
        <div className="formbox">
            <p className="personal_information">PERSONAL INFORMATION</p>
          <div className="field">
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <input
              type="text"
              name="dob"
              placeholder="DOB"
              value={formValues.dob}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.dob}</p>

          <div className="field">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formValues.country}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.country}</p>
          <div className="field">
            <input
              type="text"
              name="phonenumber"
              placeholder="Phone Number*"
              value={formValues.phonenumber}
              onChange={handleChange}
            />
            
          </div>
          <p>{formErrors.phonenumber}</p>
          <button className="button_blue">NEXT</button>
        </div>
      </form>
    </div>
  );
}

export default Form;



