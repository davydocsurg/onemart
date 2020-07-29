<template>
<div class="onemart">
		<section class="jumbotron text-center shadow-lg col-md-8" style="">
			<div class="container note">
			<h1 class="lab">Welcome To Onemart</h1>
			<p class="lead lab">
				Something short and leading about the collection
				below—its contents, the creator, etc. Make it short and sweet, but not too short 
				so folks don’t simply skip over it entirely.
			</p>
			<!-- <p>
					<a href="#" class="btn btn-primary my-2">Main call to action</a>
					<a href="#" class="btn btn-secondary my-2">Secondary action</a>
			</p> -->
			</div>
		</section>
<div class="card log shadow-lg mb-5 col-md-4">
	<div class="mt-3 text-center"><h3>Sign Up</h3></div>
	<div class="card-body">
        <form @submit.prevent="addUser" >
            <div class="form-group">
                <label class="lab"><strong>Name</strong></label>
                <input type="text" class="form-control form-control-lg" v-model="user.name" name="name" required autofocus placeholder="Enter Name"/>
            </div>

            <div class="form-group">
                <label class="lab"><strong>Email address</strong></label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" name="email" required placeholder="Enter e-mail address"/>
            </div>

            <div class="form-group">
                <label class="lab"><strong>Password</strong></label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" name="password" required placeholder="Enter password" />
            </div>

			<div class="form-group">
                <label class="lab"><strong>Confirm Password</strong></label>
                <input type="password" class="form-control form-control-lg" v-model="user.confirm_password" name="confirm_password" required placeholder="Confirm password" />
            </div>

            <button  class="btn btsg btn-lg btn-block">Sign Up</button>
				<hr>
            <p class="forgot-password ">
                Already registered ?
                <router-link :to="{name: 'login'}"><b>Sign in.</b></router-link>
            </p>
        </form>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'


export default {
name: 'app', 
	data() {
		return {
			user: {
				name: '',
				email: '',
				password: '',
				confirm_password: '',
			},

			submitted: false
		}
	},

	computed: {
		...mapState('account', ['status'], {
		alert: state => state.alert
		})
	},

	methods: {
		...mapActions([
		'addUser','account', ['register'],
		{clearAlert: 'alert/clear'}
		]),
		// addUser function
		addUser() {
			this.submitted = true;

			// axios 
			axios.post("http://127.0.0.1:8000/api/auth/register", {
				name: this.user.name,
				email: this.user.email,
				password: this.user.password,
				password_confirmation: this.user.confirm_password
			})

			// promises
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			})
			}
		},

	}
</script>
