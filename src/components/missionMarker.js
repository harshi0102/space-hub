import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/missionMarker.module.css';

function MissionMarker({ isReserved }) {
  return (
    <div className={styles.label}>
      <div
        style={{ backgroundColor: isReserved ? '#18a2b8' : '#6d757d' }}
      >
        {isReserved ? 'Active Member' : 'NOT A MEMBER'}
      </div>
    </div>
  );
}

MissionMarker.propTypes = {
  isReserved: PropTypes.bool.isRequired,
};

export default MissionMarker;
