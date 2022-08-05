import "./App.css";
import Items from "./components/items/Items";
import Filter from "./components/filters/Filter";

function App() {
  return (
    <>
      <div className="container">
        <aside className="aside__section">
          <Filter />
        </aside>
        <main className="main__section">
          <Items />
        </main>
      </div>
    </>
  );
}

export default App;
