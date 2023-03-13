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
      <va-button color="warning" class="mr-5"> Dashboard </va-button>
      <va-button color="warning" class="mr-5"> Reports </va-button>
      <va-button color="warning" class="mr-5"> Users </va-button>
    </template>
  </va-navbar>
</template>

<style scoped>
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
