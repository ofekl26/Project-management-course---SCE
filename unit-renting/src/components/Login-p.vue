<template>
  <div class="login">
    <div id="content">
      <p style="margin-top:0px; padding:50px">
      {{ msg }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginP",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
