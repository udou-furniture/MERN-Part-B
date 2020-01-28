// const initialState = { reviews: ['hello review bois an goils'] };

const reviewReducer = (state, action) => {
  let newState = {};

  switch (action.type) {
    case 'UPDATE_REVIEWS':
      newState = { ...state, reviews: action.newReviews };
      break;

    default:
      newState = { ...state };
  }
  return newState;
};

export default reviewReducer;
