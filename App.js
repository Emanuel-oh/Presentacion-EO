import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold">Bienvenido a mi portafolio</h1>
          <p>Aquí encontrarás mis proyectos y experiencia.</p>
        </div>
      )}
    </>
  );
}
