import Search from "../../components/Search/Search";
import "./CategoriesPage.css";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useEffect, useState } from "react";
import { getAllCategories} from "../../api/api";
import Preloader from "../../components/Preloader/Preloader";
export default function CategoriesPage() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [search, setSearch] = useState("");
  function onSearchHandler({ target }) {
    const regexp = /[^a-zA-Z]+/g; //неБуквы
    let newValue = target.value.replace(regexp, "");
    setSearch(newValue);
  }
  function getEntities(categories) {
    return categories.map((el) => ({
      id: el.idCategory,
      name: el.strCategory,
      description: el.strCategoryDescription,
      imageUrl: el.strCategoryThumb,
      link: `/category/${el.strCategory.toLowerCase()}`,
    }));
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getAllCategories()
        .then((data) => {
          setCategories(getEntities(data.categories));
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);
  useEffect(() => {
    setFilteredCategories(
        search
          ? categories.filter((el) =>
              el.name.toLowerCase().includes(search.toLowerCase())
            )
          : categories
    );
  }, [search, categories]);
  return (
    <>
      <Search search={search} onSearchHandler={onSearchHandler} />
      {loading ? (
        <Preloader color="primary" variant="linear" />
      ) : (
        <CategoryList entities={filteredCategories} linkName="DISHES" />
      )}
    </>
  );
}
