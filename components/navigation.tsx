import Link from "next/link"
import styles from "@/styles/navigation.module.css"


export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}