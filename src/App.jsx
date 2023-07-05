import { Routes, Route, useLocation } from "react-router-dom";
import Game from "./pages/Game";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='/game' element={<Game />} />
          </Routes>
        </AnimatePresence>
      </QueryClientProvider>
    </>
  );
}

export default App;
