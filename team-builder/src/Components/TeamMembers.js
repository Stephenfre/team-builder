import React from "react";
import styled from "styled-components";

const MembersContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 75%
  justify-content: space-evenly;
  align-item: center;
  align-content: center;
  flex-wrap: wrap;

`;

const MemberDivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  width: 25%;
  height: 100%;
  margin-bottom: 30px;
  box-shadow: 10px 5px 5px lightgrey;
`;

const MemberName = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:800&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 800;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
  width: 100%;
  text-align: center;
`;
const MemberInfo = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  font-family: "Montserrat", sans-serif;
`;

const Members = props => {
  console.log(props);
  return (
    <MembersContainer className="member-list">
      {props.memberList.map(member => {
        return (
          <MemberDivCard className="member" key={member.id}>
            <MemberName>{member.name}</MemberName>
            <MemberInfo>{member.email}</MemberInfo>
            <MemberInfo>{member.role}</MemberInfo>
          </MemberDivCard>
        );
      })}
    </MembersContainer>
  );
};

export default Members;
