import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Listings from "./Components/Listings";

function App() {
  return (
    <>
      <Header />
      <section id="conent-area">
        <Filter />
        <Listings />
      </section>
    </>
  );
}

export default App;
