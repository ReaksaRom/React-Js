import  { useState, useEffect } from "react";
import { Progress } from "flowbite-react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 70 ? prev + 1 : prev));
    }, 0); // Increment by 1 every 100ms
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="w-1/4 mt-6">
        <Progress progress={progress} size="lg" color="dark" />
        <p className="text-center text-lg font-semibold mt-2 text-gray-700">
          {progress}%
        </p>
      </div>
    </>
  );
}

export default App;
