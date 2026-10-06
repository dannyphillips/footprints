import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { ParkBrowser } from "./components/ParkBrowser";
import { ParkDetail } from "./components/ParkDetail";
import { VisitsProvider } from "./visits/VisitsProvider";

export function App() {
  return (
    <VisitsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<ParkBrowser />} />
            <Route path="parks/:slug" element={<ParkDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </VisitsProvider>
  );
}
