import {combineReducers} from 'redux'
import * as ActionTypes from '../constants/index'


function numberReducer(number=0, action) {
  switch (action.type) {
    case ActionTypes.ADD_NUMBER:
      return number + action.amount
  }
  return number
}

const reducers = {
  number: numberReducer
}
const combinedReducer = combineReducers(reducers)

export default combinedReducer
