import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

export default function App() {
  return <RouterProvider router={mainRouter()}></RouterProvider>;
}

const mainRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<MatchAll />} />
      </Route>
    ),
    { basename: "/app" }
  );

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function MatchAll() {
  return <h2>Match All</h2>;
}
