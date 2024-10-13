import AboutUs from "./AboutUs"
import AppSection from "./AppSection"
import Banner from "./Banner"
import CategoyShowCase from "./CategoyShowCase"
import HomeCategory from "./HomeCategory"
import LocationSprade from "./LocationSprade"
import Register from "./Register"
import Sponsor from "./Sponsor"


function Home() {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoyShowCase/>
      <Register/>
      <LocationSprade/>
      <AboutUs/>
      <AppSection/>
      <Sponsor/>
    </div>
  )
}

export default Home
