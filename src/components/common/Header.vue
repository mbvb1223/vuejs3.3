<template>
  <va-navbar
      color="#282F69"
      style="height: 100px;"
  >
    <template #left>
      <va-navbar-item class="logo">
        LOGO
      </va-navbar-item>
    </template>
    <template #right>
      <va-button color="warning" class="mr-5" to="/"> Home </va-button>
      <va-button color="warning" class="mr-5" to="/about"> About </va-button>
      <va-button color="warning" class="mr-5" to="/contact"> Contact </va-button>
    </template>
  </va-navbar>
</template>

<style scoped>
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
