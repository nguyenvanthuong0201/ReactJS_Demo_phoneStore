import * as types from '../constants/ActionTypes'
import * as Messages from '../constants/Messages'

const initialState = Messages.MSG_WELCOME

const reMessage = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:   // ở constants
    return action.message       // message này ở actions/index
    default: return state;
  }
};
export default reMessage;
