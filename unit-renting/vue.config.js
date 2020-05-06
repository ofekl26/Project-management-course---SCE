module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/../ode_modules/vue-atlas/src/variables.scss";`
        }
      }
    }
  }