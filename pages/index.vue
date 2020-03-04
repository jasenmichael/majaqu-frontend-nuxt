<template>
  <div class="container">
    <div>
      <h1 class="title">majaqu-frontend</h1>
      <h2 class="subtitle">majaqu frontend using Nuxt</h2>
      <div class="links">
        <nuxt-link v-if="!$auth.loggedIn" to="login" class="button--green">Sign in</nuxt-link>
        <nuxt-link v-else to="login" @click.native="logout()" class="button--green">Sign out</nuxt-link>
        <!-- <b-button class="grey" @click="$auth.logout()">logout</b-button> -->
        <pre class="user">{{$auth.user}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      setTimeout(async () => {
        await this.$auth.logout()
        this.$router.push('/login')
      }, 1000)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.user {
  text-align: left;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
