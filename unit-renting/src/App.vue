<template>
  <div id="app">
    <datepicker />
    <div class="topbar">
      <div id="nav" style="float:left; location:absolute; margin-left:5px">
        <router-link to="/"
          ><img src="./assets/home_logo.png" style="width:80px;"
        /></router-link>
      </div>
      <div id="LR" style="float:right; location:absolute; top:50%">
        <router-link to="/Register" style="margin-right:15px">
          Sign Up
        </router-link>
        <router-link to="/Login" style="float:right">Log in</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}

.topbar {
  overflow: hidden;
  background-color: #e2e2e2;
  font-size: 17px;
  font-weight: bold;
}

.topbar a {
  float: center;
  color: #dfdfdf;
  padding: 0px 0px;
  text-decoration: none;
}

.topbar a:hover {
  background-color: #e2e2e2;
  color: black;
}

.topbar a.active {
  background-color: #e2e2e2;
  color: white;
}
#topbar {
  padding: 0px;
}
#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1298e6;
}
#LR {
  top: 50%;
  padding: 25px;
}

#LR a {
  font-weight: bold;
  color: #272b27;
}

#LR a.router-link-exact-active {
  color: #00b8f0;
}
</style>
