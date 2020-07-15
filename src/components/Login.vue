<template>
  <div class="container">
		<div class="card log shadow-lg">
		<div class="mt-3 text-center "><h3 class="lab">Sign In</h3></div>
		<div class="card-body">
		<form class="">

			<div class="form-group mt-5">
					<label class="lab"><strong>Email address</strong></label>
					<input type="email" class="form-control form-control-lg" required autofocus placeholder="Enter e-mail"/>
			</div>

			<div class="form-group">
					<label class="lab"><strong>Password</strong></label>
					<input type="password" class="form-control form-control-lg" required placeholder="Enter password"/>
			</div>

			<button type="submit" class="btn btn-lg btn-block btsg">Sign In</button>
					<hr>
			<div class="lnki">
			Don't have an account ?
					<router-link to="/signup" class="text-primary "> <b>Sign up.</b></router-link>
					<hr>
					<router-link to="/forgot-password" class="text-right text-danger">Forgot password ?</router-link>
			</div>

		</form>
		</div>
		</div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>
