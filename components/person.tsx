import Link from "next/link";
import styles from "@/styles/person.module.css"

interface IPersonProps {
  id: string
  squareImage: string
  name: string
  netWorth: number
  industries: string
}

export default function Person({id, name, squareImage, netWorth, industries}: IPersonProps) {

  // netWorth를 "Billion" 단위로 변환하는 함수
  function formatNetWorth(netWorth: number): string {
    return `${(netWorth / 1000).toFixed(0)} Billion`;
  }

  return  (
    <li key={id} className={styles.person}>
      <Link prefetch href={`/person/${id}`}>
        <img src={squareImage} alt={name} />
        <h3>{name}</h3>
        <p>
          <span>{formatNetWorth(netWorth)}</span>
          <span> / </span> 
          <span>{industries}</span>
        </p>
      </Link>
    </li>
  )
}