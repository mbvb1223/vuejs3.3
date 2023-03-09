<template>
  <v-footer height="60" class="d-block text-center">
    <div>
      {{ $t('messages.hello') }}
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    appVersion() {
      return '123456'
    }
  }
}
</script>
