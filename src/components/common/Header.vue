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
      <va-button color="primary" class="mr-5" to="/photos"> Photo </va-button>
      <va-button color="danger" class="mr-5" to="/about"> About </va-button>
      <va-button color="primary" class="mr-5" to="/album"> Album </va-button>
      <va-button color="info" class="mr-5" to="/posts"> Post </va-button>
      <va-button color="component" class="mr-5" to="/components"> Component </va-button>
    </template>
  </va-navbar>
</template>

<style scoped>
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
