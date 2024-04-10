import { useLocation } from "react-router-dom";
import "./CategoryPage.css";
import { useEffect, useState } from "react";
import { getDishesByCategories } from "../../api/api";
import CategoryList from "../../components/CategoryList/CategoryList";
import Search from "../../components/Search/Search";
import Preloader from "../../components/Preloader/Preloader";

export default function CategoryPage() {
  let { pathname } = useLocation();
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  function onSearchHandler({ target }) {
    const regexp = /[^a-zA-Z]+\s*/g; //неБуквы 
    let newValue = target.value.replace(regexp, "");
    setSearch(newValue);
  }
  function getEntities(dishes) {
    return dishes.map((el) => ({
      id: el.idMeal,
      name: el.strMeal,
      description: "",
      imageUrl: el.strMealThumb,
      link: `/dish/${el.idMeal}`,
    }));
  }
  useEffect(() => {
    let currentCategory = pathname.split("/")[2];
    setLoading(true);
    setTimeout(() => {
      getDishesByCategories(currentCategory).then((data) => {
        setDishes(getEntities(data.meals));
      }).finally(() => setLoading(false));
    }, 1000);
  }, [pathname]);
  useEffect(() => {
    setFilteredDishes(
        search
          ? dishes.filter((el) =>
              el.name.toLowerCase().includes(search.toLowerCase())
            )
          : dishes
    );
  }, [search, dishes]);
  return (
    <>
      <Search search={search} onSearchHandler={onSearchHandler} />
      {loading ? (
        <Preloader color="primary" variant="linear" />
      ) : (
        <CategoryList entities={filteredDishes} linkName="RECIPE" />
      )}
    </>
  );
}
