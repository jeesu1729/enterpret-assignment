import Header from "./components/Header";
import Built from "./components/Built";
import Query from "./components/Query";
import { useState } from "react";
import Portal from "./components/Portal";

function App() {
  const [builtQueryButton, setbuiltQueryButton] = useState(false);

  const handleOnclick = () => {
    setbuiltQueryButton(!builtQueryButton);
    console.log(builtQueryButton);
  };

  return (
    <div class="bg-black w-screen h-screen">
      <Header />
      {builtQueryButton ? (
        <div class="absolute bg-[#181818] text-white top-[22%] left-[26%] w-[56%] h-3/4">
          <Portal setbuiltQueryButton={() => (setbuiltQueryButton(!builtQueryButton))}/>
        </div>
      ) : (
        <div></div>
      )}
      <div class="h-full w-full flex flex-row mt-8">
        <Built builtClickHandler={handleOnclick}></Built>
        <Query></Query>
      </div>
    </div>
  );
}

export default App;
