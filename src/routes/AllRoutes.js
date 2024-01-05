import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { JokePage } from "../pages/JokePage";
import {PageNotFound} from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="joke" element={ <JokePage /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </>
  );
};
