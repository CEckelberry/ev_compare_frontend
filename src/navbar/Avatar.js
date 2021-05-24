import React, { useContext } from 'react';
import { Avatar, Grommet } from 'grommet';
import UserContext from "../auth/UserContext";

export const ProfAvatar = () => {

  const { currentUser } = useContext(UserContext);

  return (
    
    currentUser 
      ? 
      <Grommet>
        <Avatar src={currentUser.profile_image}>SY</Avatar>
      </Grommet>
      
      : (
        
        <Grommet>
          <Avatar background="#6FFFB0">SY</Avatar>
        </Grommet>
      )

    



  );
};

export default ProfAvatar;