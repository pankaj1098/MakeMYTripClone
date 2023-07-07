import AddressBar from "./components/AddressBar";
import Body from "./components/Body";
import Header from "./components/Header";
import SelectBar from "./components/SelectBar";

import Shortby from "./components/Shortby";

function App() {
  return (
    <div>
      <Header />
      <SelectBar />
      <AddressBar />
      <Shortby />

      <Body />
    </div>
  );
}

export default App;
