<template>
  <div>
      <!-- Navigation -->
      <div class="flex-center position-ref full-height">
        <div class="top-right links nay">
            <router-link :to="{name: 'login'}" class="signin">Sign In</router-link>
            <router-link :to="{name: 'signup'}" class="signup">Sign up</router-link>
        </div>
      </div>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
      name: 'app',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (){
            // clear alert on location change
            this.clearAlert();
        }
    } 
};
</script>