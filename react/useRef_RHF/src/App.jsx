import React, { useRef } from "react";
import Form from "./components/Form";

const App = () => {
  const inpRef = useRef();
  console.log(inpRef);

  return (
    <div className="h-screen bg-gray-300 p-5 w-full">
      <h1 className="mb-8">Hey this is form</h1>
      {/* <Form/> */}

      <input ref={inpRef} type="text" placeholder="Something..." />
      <button onClick={() => console.log(inpRef.current.value)}>Submit</button>
    </div>
  );
};

export default App;
