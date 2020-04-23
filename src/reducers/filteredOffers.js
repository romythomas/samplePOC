import {filterOffers, updateSelectedFilter} from '../utilities/Filter'
import {sortOffers} from '../utilities/Sort'
import {
  LOGIN,
  FILTER_OFFER,
  SORT_OFFER
} from '../constants/actionTypes';

const defaultState = {
  offers: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        offers: action.error ? [] : action.payload[1].offers,
      };
    case FILTER_OFFER:
      return {
        ...state,
        offers: action.filteredOffers
      };
    default:
      return state;
  }
};
