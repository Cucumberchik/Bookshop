
import "./components/style/style.css"
import Navbar from './navbar/navbar';
import "./components/style/media.css"
import RoutesRoute from "./routes/routes";
import Footer from "./Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesRoute />
      <Footer />
    </div>
  );
}

export default App;



