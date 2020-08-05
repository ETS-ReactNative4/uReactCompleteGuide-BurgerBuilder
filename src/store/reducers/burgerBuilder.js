import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action, amount) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + amount }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + (amount > 0 ? +INGREDIENT_PRICE[action.ingredientName] : -INGREDIENT_PRICE[action.ingredientName])
    }
    return updateObject(state, updatedState);
}

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
    })
}

const fetchIngredientFailed = (state, action) => {
    return updateObject(state, { error: true });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action, 1)
        case actionTypes.REMOVE_INGREDIENT: return addIngredient(state, action, -1)
        case actionTypes.SET_INGREDIENTS: return setIngredient(state, action)
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientFailed(state, action)
        default: return state;
    }
}

export default reducer;