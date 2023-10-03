import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Browse from "./components/Browse";
import store from "./store/store";
import { Provider } from "react-redux";
import { MdWatch } from "react-icons/md";
import MovieDetails from "./components/MovieDetails";
import TrendingMovies from "./components/TrendingMovies";
import HomePage from "./components/HomePage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:'moreDetails',
          element:<MovieDetails/>
        }
      ]
    },
  ]);

  return (
    <Provider store={store}>
      <div className="bg-gray-950">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
