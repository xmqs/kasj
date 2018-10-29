import * as types from './mutation-type'

export default {
  [types.setIncludedComponents](state,includedComponents){
    state.includedComponents = includedComponents;
  },
  [types.setUserName](state,userName){
    state.userName = userName;
  },
  [types.setUserId](state,userId){
    state.userId = userId;
  },
  [types.setUserPhone](state,userPhone){
    state.userPhone = userPhone;
  }
}
