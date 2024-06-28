import { API_URL } from "@/config";
import styles from "@/styles/person-summary.module.css"


async function getSummary(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

  // netWorth를 "Billion" 단위로 변환하는 함수
  function formatNetWorth(netWorth: number): string {
    return `${(netWorth / 1000).toFixed(0)} Billion`;
  }

export default async function PersonSummary({ id }: { id: string }) {
  const person = await getSummary(id);
  return (
    <div className={styles.container}>
      <img src={person.squareImage} alt={person.name} />
      <div className={styles.details}>
        <h3>{person.name}</h3>
        <p>Networth: {formatNetWorth(person.netWorth)}</p>
        <p>Country: {person.country}</p>
        <p>Industry: {person.industries}</p>
        <p className={styles.bio}>{person.bio}</p>
      </div>
    </div>
  )
}