import Image from 'next/image'
import styles from './page.module.css'
import Registration from '../components/registration'
import Footer from '../components/footer';
export default function Home() {
  return (
    <main>
      <Registration/>
      <Footer/>
    </main>
  )
}
