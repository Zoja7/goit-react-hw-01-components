import  user  from '../data/user.json';
import { Profile } from './Profile/Profile';

import statistics from '../data/statistics.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../data/friends.json'
import { FriendList } from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import css from './App.module.css'

export const App = () => {

  return (
    <section className={css.section}>
    <div className={`${css.container} ${css.profileContainer}`}>
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

      <FriendList
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />
    
      </div> 
    </section>  
  ) 
  
};
