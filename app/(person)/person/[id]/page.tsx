
import PersonMore from "@/components/person-more"
import PersonSummary from "@/components/person-summary"
import { Suspense } from "react"

export default function PersonDetails({
  params: {id},
}: {
  params: {id: string}
}) {
  return (
    <div>
      <Suspense fallback={<h1>Person Summary  Loading...</h1>}>
        <PersonSummary id={id} />
      </Suspense>
      <Suspense fallback={<h1>Person More videos Loading...</h1>}>
        <PersonMore id={id} />
      </Suspense>
    </div>
  )
}