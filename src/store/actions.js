import * as types from './mutation-type'

export default {
  nameAsyn({commit},{includedComponents,userId,userName,userPhone}){
    commit(types.setIncludedComponents,includedComponents);
    commit(types.setUserId,userId);
    commit(types.setUserName,userName);
    commit(types.setUserPhone,userPhone);
  }

}
