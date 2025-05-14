import About from "../components/about"
import Cards from "../components/cards"
import Footer from "../components/footer"
import FormSection from "../components/form"
import Header from "../components/header"
import Hero from "../components/hero"
import Map from "../components/map"
import Result from "../components/result"

function MainPage() {
  return (
    <>
        <Header/>
        <Hero/>
        <Result/>
        <About/>
        <Cards/>
        <FormSection/>
        <Map/>
        <Footer/>
    </>
  )
}

export default MainPage