import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Hello World</h1>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
