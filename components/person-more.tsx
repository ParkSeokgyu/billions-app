import { API_URL } from "@/config";
import styles from "@/styles/person-more.module.css";

interface FinancialAsset {
  ticker: string;
  numberOfShares: number;
  exerciseOptionPrice?: number;
}

interface PersonType {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
  financialAssets?: FinancialAsset[];
}

async function getMore(id: string): Promise<PersonType> {
  const response = await fetch(`${API_URL}/person/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function PersonMore({ id }: { id: string }) {
  const person: PersonType = await getMore(id);

  // 조건부 렌더링을 추가하여 오류를 방지합니다.
  if (!person.financialAssets || person.financialAssets.length === 0) {
    return <div className={styles.noAssets}>No financial assets available</div>;
  }

  return (
    <div className={styles.container}>
      <h3>Financial Assets</h3>
      <div className={styles.assetsGrid}>
        {person.financialAssets.map((asset, index) => (
          <div key={index} className={styles.assetCard}>
            <h4>Ticker: {asset.ticker}</h4>
            <p>Shares: {asset.numberOfShares.toLocaleString()}</p>
            {asset.exerciseOptionPrice && (
              <p>Exercise Price: ${asset.exerciseOptionPrice}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
