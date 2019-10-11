import React, { useState } from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  width: 25%;
  background: grey;
  border-radius: 20px;
  border: 2px;
  color: white;
  padding: 10px;
  margin-top: 30px;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: space-evenly;
  height: 50%;
  background-color: none;
`;

const InputStyle = styled.input`
  height: 15%;
  border: none;
  border-bottom: 1px solid black;
`;

const MembersForm = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addMemberFn(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <InputStyle
        id="name"
        name="name"
        value={member.name}
        placeholder="Name"
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="email"></label>
      <InputStyle
        id="email"
        name="email"
        value={member.email}
        placeholder="Email"
        type="textarea"
        onChange={handleChange}
      />

      <label htmlFor="role"></label>
      <InputStyle
        id="role"
        name="role"
        value={member.role}
        placeholder="Role"
        type="text"
        onChange={handleChange}
      />

      <SubmitButton type="submit">Add Member</SubmitButton>
    </FormStyle>
  );
};

export default MembersForm;
