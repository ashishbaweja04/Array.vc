import { useState } from 'react'
import {NavBar} from './components/NavBar'
import {Banner} from './components/Banner'
import GridSection from './components/GridSection';
import MailingListForm from './components/MailingListForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Banner />
      <GridSection />
      <MailingListForm />
      <Footer />
    </>
  )
}

export default App
