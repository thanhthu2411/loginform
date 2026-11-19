import "./UserProfile.css";
import { InlineField } from "../InlineField/InlineField";
import { useState } from "react";

export function UserProfile() {
  const [userData, setUserData] = useState({
    name: "Test",
    email: "test@example.com",
    bio: "Frontend developer who loves React." 
  })


  const userChangeHandler = (name, value) => {
    setUserData((current) => ({...current, [name]: value}))
  }

  return (
    <>
      <div className="inline-fields">
        <InlineField name="name" label="Name" inputValue={userData.name} onInputChange={(val) => userChangeHandler("name", val)} />
        <InlineField name="email" label="Email" type="email" inputValue={userData.email} onInputChange={(val) => userChangeHandler("email", val)}/>
        <InlineField name="bio" label="Bio" type="textarea" inputValue={userData.bio} onInputChange={(val) => userChangeHandler("bio", val)} />
      </div>

      <button>Save</button>
      <button>Cancel</button>
    </>
  );
}

