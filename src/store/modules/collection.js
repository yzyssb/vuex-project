
const state={
  collects:[],
}

const getters={
  renderCollects(state){
    return state.collects
  }
}

const mutations={
  pushCollects(state,item){
    state.collects.push(item)
  }
}

const actions={
  invokePushItems(context,item){
    context.commit('pushCollects',item)
  }
}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}