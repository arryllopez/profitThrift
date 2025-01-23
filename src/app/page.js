import Header from '../components/Header'
import Scanner from '../components/Scanner'
import Results from '../components/Results'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <main className="py-8">
        <Scanner />
        <Results />
      </main>
    </div>
  )
}