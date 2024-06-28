import Person from "@/components/person";
import styles from "@/styles/home.module.css";
import { API_URL } from "@/config"; // API_URL import

export const metadata = {
  title: 'Home',
};

// Person 타입 정의
interface PersonType {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

const getPersons = async (): Promise<PersonType[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

export default async function Home() {
  const persons: PersonType[] = await getPersons();
  return (
    <div>
      <ul className={styles.container}>
        {persons.map((person: PersonType) => (
          <Person 
            key={person.id} 
            id={person.id} 
            name={person.name} 
            squareImage={person.squareImage} 
            netWorth={person.netWorth} 
            industries={person.industries[0]} 
          />
        ))}
      </ul>
    </div>
  );
}
