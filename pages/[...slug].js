import { useRouter } from "next/router"

export default function Page({ router }) {
  const router = useRouter()
  return <pre>{JSON.stringify(router, null, 2)}</pre>
}
export const config = { runtime: "edge" }
