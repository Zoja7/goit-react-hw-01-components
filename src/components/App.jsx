import  user  from '../data/user.json';
import { Profile } from './Profile/Profile';

import statistics from '../data/statistics.json';
import { Statistics } from './Statistics/Statistics';
import { Fragment } from 'react';


export const App = () => {

  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
     
      <Statistics
        title="Upload stats"
        stats={statistics}
      />
    </Fragment>   
  ) 
  
};
