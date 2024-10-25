import bgImage from '../../assets/images/blob.svg'
export default function Hero() {
  return (
    <main>
        <div className="bg-cover bg-center h-screen blur-3xl opacity-50"
        style = {{backgroundImage:`url(${bgImage})`}}>
        </div>
    </main>
  )
}
