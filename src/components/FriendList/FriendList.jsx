import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => { 

 return (<ul className="friend-list" >
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