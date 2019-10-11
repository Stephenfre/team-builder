import React, { useState } from "react";
import ReactDOM from "react-dom";
import TeamMembers from "./Components/TeamMembers";
import MembersForm from "./Components/MembersForm";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MemberDivList = styled.div`
  width: 100%;
  height: 50%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [members, setMembers] = useState([]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMember]);
  };

  return (
    <ContainerDiv className="App">
      <h1>Team Members</h1>
      <MemberDivList>
        <MembersForm addMemberFn={addMember} />
      </MemberDivList>
      <MemberDivList>
        <TeamMembers memberList={members} />
      </MemberDivList>
    </ContainerDiv>
  );
}

export default App;
