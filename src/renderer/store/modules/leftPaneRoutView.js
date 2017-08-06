import SystemInformation from '../../components/SystemInformation.vue';
import Clock from '../../components/Clock.vue';

const state = {
  currentView: SystemInformation
};

const mutations = {
  // DECREMENT_MAIN_COUNTER (state) {
  //   state.main--;
  // },
  // INCREMENT_MAIN_COUNTER (state) {
  //   state.main++;
  // }
};

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER');
  },
  changeView(viewName){
    if (viewName==='clock'){
      state.currentView = Clock;
    }
    else if (viewName==='systemInformation'){
      state.currentView = SystemInformation;
    }

  }
};

export default {
  state,
  mutations,
  actions
};
