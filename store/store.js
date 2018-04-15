import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const createStore = () =>{
	return new Vuex.Store({
		state:{
			count:50
		},
		mutations:{
			add(state){
		        state.count++;
		    },
		    reduce(state){
		        state.count--;
		    }
		}
	})
}

export default createStore