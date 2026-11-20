import "./UserProfile.css";
import { InlineField } from "../InlineField/InlineField";
import { useState } from "react";

export function UserProfile() {
  const user = {
    name: "Test",
    email: "test@example.com",
    bio: "Frontend developer who loves React.",
  };
  const [userOriginal, setUserOriginal] = useState(user);
  const [userDraft, setUserDraft] = useState(user);

  const [hasUserChange, setHasUserChange] = useState(false);

  const userChangeHandler = (name, value) => {
    setUserDraft((current) => ({ ...current, [name]: value }));
    setHasUserChange(true);
  };

  const saveUser = () => {
    setUserOriginal(userDraft)
    setHasUserChange(false);
  }

  const cancelChange = () => {
    setUserDraft(userOriginal)
    setHasUserChange(false);
  }

  return (
    <>
      <div className="inline-fields">
        <InlineField
          name="name"
          label="Name"
          inputValue={userDraft.name}
          onInputChange={(val) => userChangeHandler("name", val)}
        />
        <InlineField
          name="email"
          label="Email"
          type="email"
          inputValue={userDraft.email}
          onInputChange={(val) => userChangeHandler("email", val)}
        />
        <InlineField
          name="bio"
          label="Bio"
          type="textarea"
          inputValue={userDraft.bio}
          onInputChange={(val) => userChangeHandler("bio", val)}
        />
      </div>

      {hasUserChange && (
        <div className="actions">
          <button onClick={saveUser}>Save</button>
          <button onClick={cancelChange}>Cancel</button>
        </div>
      )}
    </>
  );
}
