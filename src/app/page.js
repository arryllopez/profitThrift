import Header from '../components/Header'
import Scanner from '../components/Scanner'
import Results from '../components/Results'
import BarcodeScannerComponent from '../components/barcodeScanner'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />

      <main className="py-8">

      <BarcodeScannerComponent /> 
      <Results />
      
      </main>
    </div>
  )
}