const state={
  showFooter:true,
  changableNum:0,
}

const getters={
  isShow(state){
    return state.showFooter
  },
  getChangableNum(state){
    return state.changableNum
  }
}

const mutations={
  show(state){
    state.showFooter=true
  },
  hide(state){
    state.showFooter=false
  },
  newNum(state,num){
    state.changableNum+=num
  }
}

const actions={
  showFooter(context){
    context.commit('show')
  },
  hideFooter(context){
    context.commit('hide')
  },
  getNewNum(context,num){
    context.commit('newNum',num)
  }
}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}