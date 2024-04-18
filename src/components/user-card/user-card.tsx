import { User } from '../../types/type';
import styles from './user-card.module.css';

function UserCard({ user, deleteUser }: { user: User; deleteUser: (id: string) => void }) {
  return (
    <div className={styles.userCard}>
      <div className={styles.userInfo}>
        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className={styles.userImage} />
        <div className={styles.userInfo_1}>
          <h2 className={styles.userName}>{`${user.name.first} ${user.name.last}`}</h2>
          <p className={styles.userEmail}>{user.email}</p>
        </div>
      </div>
      <div className={styles.userDetails}>
        <div className={styles.userInfo_2}>
          <p className={styles.userPhone}>Phone No</p>
          <p className={styles.userBirthday}>Birthday</p>
          <p className={styles.userAddress}>Address</p>
        </div>
        <div className={styles.userInfo_3}>
          <p className={styles.userPhone}>{user.phone}</p>
          <p className={styles.userBirthday}>{user.dob.date}</p>
          <p className={styles.userAddress}>{user.location.street.name}</p>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={() => deleteUser(user.login.uuid)}>
        <img className={styles.deleteIcon} src="./trash.svg" alt="Delete" />
      </button>
    </div>
  );
}

export default UserCard;
