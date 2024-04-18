import React from 'react';
import styles from './user-list.module.css';
import UserCard from '../user-card/user-card';
import { User } from '../../types/type';

const UserList = React.memo(({ deleteUser, filteredUsers }: { deleteUser: any; filteredUsers: any }) => {
  return (
    <div className={styles.userList}>
      {filteredUsers.map((user: User) => (
        <UserCard key={user.login.uuid} user={user} deleteUser={deleteUser} />
      ))}
    </div>
  );
});

export default UserList;
