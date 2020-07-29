// import { userService } from '../_services';
import router  from '../router';

// const user = JSON.parse(localStorage.getItem('user'));
// const state = user
//     ? { status: { loggedIn: true }, user }
//     : { status: {}, user: null };

const actions = {
    // login({ dispatch, commit }, { email, password }) {
    //     commit('loginRequest', { email });
    
    //     userService.login(email, password)
    //         .then(
    //             user => {
    //                 commit('loginSuccess', user);
    //                 router.push('/');
    //             },
    //             error => {
    //                 commit('loginFailure', error);
    //                 dispatch('alert/error', error, { root: true });
    //             }
    //         );
    // },
    // logout({ commit }) {
    //     userService.logout();
    //     commit('logout');
    // },
	register({ dispatch, commit }) {
		commit('registerRequest' );
	
			// register(user)
				(
					() => {
						commit('registerSuccess');
						router.push('/login');
						setTimeout(() => {
								// display success message after route change completes
								dispatch('alert/success', 'Registration was successful!', { root: true });
						})
					},
					error => {
						commit('registerFailure', error);
						dispatch('alert/error', error, { root: true });
					}
				);
	}
};

const mutations = {
    // loginRequest(state, user) {
    //     state.status = { loggingIn: true };
    //     state.user = user;
    // },
    // loginSuccess(state, user) {
    //     state.status = { loggedIn: true };
    //     state.user = user;
    // },
    // loginFailure(state) {
    //     state.status = {};
    //     state.user = null;
    // },
    // logout(state) {
    //     state.status = {};
    //     state.user = null;
    // },
    registerRequest(state) {
        state.status = { registering: true };
    },
    registerSuccess(state) {
        state.status = {};
    },
    registerFailure(state, error) {
        state.status = {};
        error.status = {};
    }
};

export const account = {
	namespaced: true,
	// state,
	// user,
	// error,
	// register,
	actions,
	mutations
};
