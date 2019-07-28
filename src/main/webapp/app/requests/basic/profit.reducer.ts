import axios from 'axios';
import { parseHeaderForLinks, loadMoreDataWhenScrolled, ICrudGetAction } from 'react-jhipster';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IProfit, defaultValue } from 'app/shared/model/profit.model';

export const ACTION_TYPES = {
  FETCH_PROFIT_LIST: 'profit/FETCH_PROFIT_LIST',
  FETCH_PROFIT: 'profit/FETCH_PROFIT',
  CREATE_PROFIT: 'profit/CREATE_PROFIT',
  UPDATE_PROFIT: 'profit/UPDATE_PROFIT',
  DELETE_PROFIT: 'profit/DELETE_PROFIT',
  RESET: 'profit/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IProfit>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type ProfitState = Readonly<typeof initialState>;

// Reducer

export default (state: ProfitState = initialState, action): ProfitState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PROFIT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_PROFIT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_PROFIT):
    case REQUEST(ACTION_TYPES.UPDATE_PROFIT):
    case REQUEST(ACTION_TYPES.DELETE_PROFIT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_PROFIT_LIST):
    case FAILURE(ACTION_TYPES.FETCH_PROFIT):
    case FAILURE(ACTION_TYPES.CREATE_PROFIT):
    case FAILURE(ACTION_TYPES.UPDATE_PROFIT):
    case FAILURE(ACTION_TYPES.DELETE_PROFIT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_PROFIT_LIST):
      const links = parseHeaderForLinks(action.payload.headers.link);
      return {
        ...state,
        links,
        loading: false,
        totalItems: action.payload.headers['x-total-count'],
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links)
      };
    case SUCCESS(ACTION_TYPES.FETCH_PROFIT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_PROFIT):
    case SUCCESS(ACTION_TYPES.UPDATE_PROFIT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_PROFIT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'basic/api/receiptpay/getUserPrifitInfo';

// Actions

export const getProfitEntity: ICrudGetAction<IProfit> = userid => {
  const requestUrl = `${apiUrl}/${userid}`;
  return {
    type: ACTION_TYPES.FETCH_PROFIT,
    payload: axios.get<IProfit>(requestUrl)
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
