import { User } from '../../types/type';
import styles from './statistics.module.css';

const calculateStatistics = (users: User[]) => {
  const genderGroups = users.reduce((acc: any, user: User) => {
    acc[user.gender] = (acc[user.gender] || 0) + 1;
    return acc;
  }, {});

  const ageGroups = users.reduce((acc: any, user: User) => {
    const age = user.dob.age;
    const ageGroup = `${Math.floor(age / 10) * 10 + 1} to ${Math.floor(age / 10) * 10 + 10}`;
    acc[ageGroup] = (acc[ageGroup] || 0) + 1;
    return acc;
  }, {});

  return { genderGroups, ageGroups };
};

const Statistics = ({ users }: { users: User[] }) => {
  const { genderGroups, ageGroups } = calculateStatistics(users);

  const sortedAgeGroupKeys = Object.keys(ageGroups).sort((a, b) => {
    const rangeA = a.split('to')[0];
    const rangeB = b.split('to')[0];
    return parseInt(rangeA, 10) - parseInt(rangeB, 10);
  });

  return (
    <div className={styles.statistics}>
      <h1>{users.length} Users</h1>
      <div>
        <h2>Age Groups</h2>
        {sortedAgeGroupKeys.map((age) => (
          <div key={age}>
            {age} {ageGroups[age]} users
          </div>
        ))}
      </div>
      <div>
        <h2>Gender Groups</h2>
        <div>Male {genderGroups.male} users</div>
        <div>Female {genderGroups.female} users</div>
      </div>
    </div>
  );
};

export default Statistics;
