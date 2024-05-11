import Catergories from "./Components/Catergories";
import Delivery from "./Components/Delivery";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Meal from "./Components/Meal";
import NewsLetter from "./Components/NewsLetter";
import TopNav from "./Components/TopNav";
import TopPicks from "./Components/TopPicks";



function App() {
  return (
    <div className="App">
        <TopNav/>
        <Featured/>
        <Delivery/>
        <TopPicks/>
        <Meal/>
        <Catergories/>
        <NewsLetter/>
        <Footer/>
    </div>
  );
}

export default App;
