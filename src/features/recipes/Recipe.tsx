import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRecipes,
  recipesSelector,
  RecipeData,
} from './recipesSlice';
import styles from './Recipe.module.css';

export function Recipe() {
  const { recipes, loading, hasErrors } = useSelector(recipesSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])

  const renderRecipes = () => {
    if (loading) return <p>Loading recipes...</p>
    if (hasErrors) return <p>Cannot display recipes...</p>

    return recipes.map((recipe: RecipeData) =>
      <div key={recipe.idMeal} className={styles.tile}>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt='' />
      </div>
    )
  }
  console.log("recipes: ", recipes)

  return (
    <section className={styles.wrapper}>
      <h2>Recipes</h2>
      <div className={styles.content}>
        {renderRecipes()}
      </div>
    </section>
  )
}
