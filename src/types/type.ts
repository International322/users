export interface User {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  phone: string;
  login: {
    uuid: string;
  };
  dob: {
    date: string;
    age: number;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    country: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
