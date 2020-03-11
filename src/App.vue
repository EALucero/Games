<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div>
        <router-link to="/list">List</router-link>
      </div>
      <div>
        <router-link to="/new1">New1</router-link>
        <router-link to="/new2">New2</router-link>
        <router-link to="/new3">New3</router-link>
        <router-link to="/new4">New4</router-link>
      </div>
      <div>
        <router-link to="/new5">New5</router-link>
        <router-link to="/new6">New6</router-link>
        <router-link to="/new7">New7</router-link>
        <router-link to="/new8">New8</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
