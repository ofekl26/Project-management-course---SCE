<template>
  <div class="Login">
    <div id="content">
      <LoginP msg="This is a Login page" />
    </div>
  </div>
</template>

<script>
import LoginP from "@/components/Login-p.vue";

export default {
  name: "Login",
  components: {
    LoginP
  }
};
</script>
<style scoped>
content {
  margin: 50px 50px 50px;
}
</style>
