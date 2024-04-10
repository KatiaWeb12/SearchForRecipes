import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DishPage from "./pages/DishPage/DishPage";
export default function RootRouter(){
   return(
      <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index element={<CategoriesPage/>}/>
            <Route path="category/:name" element={<CategoryPage/>}/>
            <Route path="dish/:name" element={<DishPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
         </Route>
      </Routes>
   )
}