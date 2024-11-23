import React from 'react';
import Email from './Email';
import Name from './Name';
import Address from './Address';
import PersonalInfo from './PersonalInfo';

function Profile() {
  return (
    <div className="profile">
      <Name />
      <Email />
      <Address />
      <PersonalInfo />
    </div>
  );
}

export default Profile;
