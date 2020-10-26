import React from 'react';

import styles from './TeamWithLogo.module.css';
import { Team } from '../../../../services/fixtures/types';

interface Props {
  team: Team;
}

const TeamWithLogo: React.FC<Props> = ({ team }) => (
  <div className={styles.container}>
    <img
      className={styles.logo}
      src={team.logo}
      alt={`${team.teamName} logo`}
    />
    <h4>{team.teamName}</h4>
  </div>
);

export default React.memo(TeamWithLogo);
