import css from './FriendList.module.css'
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => { 

    return (<ul className={`${css.friendList}`}>
     {friends.map(({id,avatar,name,isOnline}) => {
        return (
                    <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    />
             );
        })}
             </ul>)
}