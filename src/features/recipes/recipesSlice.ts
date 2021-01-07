import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface RecipeState {
  loading: boolean,
  hasErrors: boolean,
  recipes: Array<RecipeData>,
}

export interface RecipeData {
  idMeal: any,
  strMeal: any
  strMealThumb: any
}

const initialState: RecipeState = {
  loading: false,
  hasErrors: false,
  recipes: [],
};

export const fetchRecipes: any = createAsyncThunk<
  any
>(
  'recipes/fetchRecipes',
  async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      const data = await response.json()
      console.log("data: ", data)
      return data.meals
    } catch (error) {
    }
  },
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    getRecipes: (state, { payload }) => {
      state.recipes = payload
    }
  },
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.loading = true
    },
    [fetchRecipes.fulfilled]: (state, { payload }) => {
      state.recipes = payload
      state.loading = false
      state.hasErrors = false
    },
    [fetchRecipes.rejected]: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const recipesSelector = (state: any) => state.recipes

export default recipesSlice.reducer
