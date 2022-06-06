import axios from "axios";
import { useEffect, useState } from "react";
import CharactersData from "./components/CharactersData";
import Header from "./components/Header";



function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      )
      console.log(result.data);
      setItems(result.data);
    }
    fetchItems();
  }, []);


  return (
    <div className="max-w-[1140px] m-auto py-4">
      <Header />
      <CharactersData items={items} />
    </div>
  );
}

export default App;
