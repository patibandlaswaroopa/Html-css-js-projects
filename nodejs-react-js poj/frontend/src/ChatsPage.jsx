//import React from 'react';
import PropTypes from 'prop-types';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  // Check if user information is provided
  if (!props.user || !props.user.username || !props.user.secret) {
    return <div>Error: User information is missing.</div>;
  }

  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId='3335633f-2b1b-4eec-8c5a-bde6317a1c09'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};

// PropTypes validation
ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;
