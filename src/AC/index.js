import {
  INCREMENT,
   DELETE_ARTICLE,
   CHANGE_SELECTION,
   CHANGE_RANGE
  } from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: {selected}
  }
}


export function changeRange(dateRange) {
  return {
    type: CHANGE_RANGE,
    payload: {dateRange}
  }
}
