import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Browse from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
}

export default App;
