<template>
  <div class="onemart" >
    <!-- Navigation -->
      <div class="flex-center position-ref full-height">
        <div class="top-right links nay">
            <router-link :to="{name: 'login'}" class="signin">Sign In</router-link>
            <router-link :to="{name: 'signup'}" class="signup">Sign up</router-link>
        </div>
      </div>
            <section class="jumbotron text-center shadow-lg" style="">
                <div class="container note">
                <h1>Welcome To Onemart</h1>
                <p class="lead  text-dark">
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
