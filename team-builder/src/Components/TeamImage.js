// import React, { useState, useEffect } from "react";

// export default function TeamMemberImage(props) {
//   const [teamMember, setTeamMember] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const imageData = await axios.get(
//           "https://randomuser.me/api/?inc=picture"
//         );
//         console.log(imageData);
//         setTeamMember(imageData.data.results);
//       } catch (err) {
//         console.log("try again" + err);
//       } //try block end
//     } // end of fechData()

//     fetchData();
//   }, []);

//   return (
//     <div className="StarWars-Conatainer">
//       {teamMember.map((teamMembers, index) => {
//         return <FrontCard key={index} name={teamMembers.picture.medium} />;
//       })}
//     </div>
//   );
}
