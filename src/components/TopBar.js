import React from 'react';
import ReactRoundedImage from "react-rounded-image";

import './topbar.css'

const TopBar = ({user}) => {
    // console.log(user);
    return (
        <div>
            Welcome, {user.displayName}
            <ReactRoundedImage  image={user.photoURL}
            roundedColor="orange"
            imageWidth="60"
            imageHeight="60"
            roundedSize="13"/>
          
            
        </div>
    );
}

export default TopBar;
