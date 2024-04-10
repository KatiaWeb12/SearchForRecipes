import { useEffect, useState } from "react";
import "./DishPage.css";
import { getRecipeById } from "../../api/api";
import { useLocation } from "react-router-dom";
import { Box, Button, Modal, Typography } from "@mui/material";
import grateBritain from '../../static/flags/grate_britain.jpg'
import Usa from '../../static/flags/usa.jpg'
export default function DishPage() {
  let { pathname } = useLocation();
  let dishId = Number(pathname.split("/")[2]);
  const [recipe, setRecipe] = useState({});
  const [modal, setModal] = useState(false);
  function modalHandler(isOpen) {
    setModal(isOpen);
  }
  useEffect(() => {
    getRecipeById(dishId).then((data) => {
      console.log(data.meals[0]);
      setRecipe(data.meals[0]);
    });
  }, []);

  console.log(Object.entries(recipe));
  return (
    <>
      <div className="recipe">
        <div className="mainInfo">
          <img src={recipe.strMealThumb} alt="Dish" />
          <div className="dishText">
            <div className="dishTitle">
              <h2>{recipe.strMeal}</h2>
              <img src={grateBritain} alt="flag" />
            </div>
            <p>{recipe.strInstructions}</p>
            <div className="but">
              <Button
                fullWidth
                variant="contained"
                onClick={() => modalHandler(true)}
              >
                Full Recipe
              </Button>
              {recipe.strSource && (
                <Button fullWidth variant="contained">
                  <a href={recipe.strSource} target="_blank">
                    Original source
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(recipe).map(([key, value]) =>
              key.includes("Ingredient") && value ? (
                <tr key={key}>
                  <td>{value}</td>
                  <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <Modal
        open={modal}
        onClose={() => modalHandler(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box">
          <Typography id="modal-modal-title" variant="h4" component="h6">
            Full Recipe
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {recipe.strInstructions}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
