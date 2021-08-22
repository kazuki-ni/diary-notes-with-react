import React from 'react'

export default function SignInForm
() {
  const form_dict = {
    "Email": {
      key: "email",
      type: "email",
      placeholder: "Email address..."
    },
    "User ID": {
      key: "user_id",
      type: "text",
      placeholder: "User ID..."
    },
    "Password": {
      key: "password",
      type: "password",
      placeholder: "Password..."
    }
  };
  return (
    <ul className="form-container">
      <li>
        <h2>Sign In</h2>
      </li>
      {/* <li>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </li> */}

      {Object.keys(form_dict).map( form_name => {
        const key = form_dict[form_name].key;
        const type = form_dict[form_name].type;
        const placeholder = form_dict[form_name].placeholder;
        return (
          <li key={key}>
            <label htmlFor={key}>
              {form_name}
            </label>
            <input
              type={type}
              name={key}
              id={key}
              placeholder={placeholder}
              autoComplete="off"
              required
            />
            <div className="form-underline"></div>
          </li>
        )
      })}

    </ul>
  )
}