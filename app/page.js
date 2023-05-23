import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Landing from '@/pages/LandingPage'


export default function Home() {
  return (
    <div className='bg-white min-h-screen' >
   <Navbar/>
   <Footer/>
   <Landing/>
    </div>
  )
}
