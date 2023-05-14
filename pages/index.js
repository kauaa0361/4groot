import { Header } from "@/components/header"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Header/>
      <article className="relative grid justify-center text-center bg-black text-white h-full min-h-full px-4">
        <div >
          <h1 className="mt-20 text-3xl md:text-4xl font-bold">Marketing Digital que</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">Funciona</h2>
        </div>
        <h3 className="my-10">Descubra o Método V4 que já ajudou milhares de empresas a dobrarem de tamanho.</h3>
        <div>
        <Link href="/" className="font-bold border border-green-600 bg-green-600 py-4 px-10">
          CONHEÇA A 4GROWTH
        </Link>
        </div>
      </article>

      <article className="relative grid justify-center text-center bg-black text-white h-full min-h-full px-4">
        <div className="text-left">
          <h1 className="mt-20 text-2xl font-bold">Porque investir em</h1>
          <h2 className="text-2xl font-bold text-green-700">Marketing digital?</h2>
        </div>
        <h3 className="my-10">Descubra o Método V4 que já ajudou milhares de empresas a dobrarem de tamanho.</h3>
        <div>
        <Link href="/" className="font-bold border border-green-600 bg-green-600 py-4 px-10">
          CONHEÇA A 4GROWTH
        </Link>
        </div>
      </article>
    </main>
  )
}
