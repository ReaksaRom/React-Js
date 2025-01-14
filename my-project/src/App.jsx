import "./App.css";
import { Button } from "flowbite-react";
import { Progress } from "flowbite-react";

function App() {
  return (
    <>
      <h1 className="text-3xl text-amber-500 font-bold underline">Hello world!</h1>
      <div>
      <Button>Click me</Button>
    </div>
    <div className="w-1/4">
    <Progress
      progress={77}
      progressLabelPosition="inside"
      textLabel="my progress"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
      color="dark"
    />
    </div>
    </>
  );
}

export default App;
