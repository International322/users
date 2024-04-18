export const fetchUsers = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=500');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Ошибка при загрузке пользователей:', error);
    return [];
  }
};
