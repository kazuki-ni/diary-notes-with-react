import React from 'react'

export default function LogInForm() {
  const form_dict = {
    "Email": {
      key: "email",
      type: "email",
      placeholder: "Email address...",
      defaultValue: "julioandtoni7@yahoo.ne.jp",
    },
    "User ID": {
      key: "id",
      type: "text",
      placeholder: "User ID...",
      defaultValue: "peko",
    },
    "Password": {
      key: "pwd",
      type: "password",
      placeholder: "Password...",
      defaultValue: "pekora0112",
    }
  }

  return (
    <ul className="form-container">
      <li>
        <h2>Log In</h2>
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
          <li key={type}>
            <label htmlFor={key}>
              {form_name}
            </label>

            { type === "password" && (
              <input
                type={type}
                name={key}
                id={key}
                placeholder={placeholder}
                autoComplete="off"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                defaultValue={form_dict[form_name].defaultValue}
                required
              />
            )}

            { type === "password" || (
              <input
                type={type}
                name={key}
                id={key}
                placeholder={placeholder}
                autoComplete="off"
                defaultValue={form_dict[form_name].defaultValue}
                required
              />
            )}

            <div className="form-underline"></div>
            <p className={key}></p>
          </li>
        )
      })}

    </ul>
  )
}
