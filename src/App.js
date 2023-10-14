import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Browse from "./components/Browse";
import store from "./store/store";
import { Provider, useSelector } from "react-redux";
import { MdWatch } from "react-icons/md";
import MovieDetails from "./components/MovieDetails";
import TrendingMovies from "./components/TrendingMovies";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import InDevelopment from "./components/InDevelopment";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Login />
        </div>
      ),
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "/browse",
          element: <HomePage />,
        },
        {
          path: "moreDetails",
          element: <MovieDetails />,
        },
        {
          path: "development",
          element: <InDevelopment />,
        },
      ],
    },
   
  ]);

  return (
    <Provider store={store}>
      <div className="">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
