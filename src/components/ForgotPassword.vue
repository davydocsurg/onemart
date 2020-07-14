<template>
  <div class="container">
		<div class="card log shadow-lg mb-5">
			<div class="mt-3 text-center"><h3>Forgot Password</h3></div>
				<div class="card-body">
        <form>

            <div class="form-group">
               <label class="lab"><strong>Email address</strong></label>
                <input type="email" class="form-control form-control-lg" required autofocus placeholder="Enter e-mail address"/>
            </div>

            <button onclick="alert('Password reset link sent. Check your email to reset your password')" type="submit" class="btn btsg btn-lg btn-block">Reset password</button>

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