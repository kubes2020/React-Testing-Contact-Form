import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [showdata, setShowData] = useState(false);

  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
    setShowData(true);
  };
  //onChange and value in the form work either way

  // const handleChange = (e) => {
  //   e.persist();
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            id="firstName"
            placeholder="Edd"
            // onChange={handleChange}
            // value={data.firstName}
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Burke"
            // onChange={handleChange}
            // value={data.lastName}
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input
            name="email"
            type="email"
            id="email"
            // onChange={handleChange}
            // value={data.email}
            ref={register({ required: true })}
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            ref={register({ required: false })}
          />
        </div>
        {showdata && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
