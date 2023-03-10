<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/common/Footer.vue'
</script>

<template>
  <div class="main">
    <div class="header" style="background: #007bb6"><h2>Header</h2></div>
    <div class="body" style="padding: 20px 0">
      <va-badge
          placement="left-start"
          text="99+"
          class="mr-6"
      >
        <va-button size="small">
          Left-Start
        </va-button>
      </va-badge>
      <va-badge
          placement="bottom-end"
          text="99+"
          class="mr-6"
      >
        <va-button size="small">
          Bottom-End
        </va-button>
      </va-badge>
      <va-badge
          placement="bottom-end"
          text="99+"
          offset="5px"
      >
        <va-button size="small">
          Bottom-End With Offset
        </va-button>
      </va-badge>


      <va-badge
          text="warning"
          color="warning"
          class="mr-6"
      />
      <va-badge
          text="#ad0"
          color="#ad0"
          class="mr-6"
      />
      <va-badge
          text="success"
          color="success"
          class="mr-6"
      />
      <va-badge
          text="#fafaa0"
          text-color="#fafaa0"
          class="mr-6"
      />
      <va-badge
          color="#692BEB"
          text-color="#692BEB"
      />

    </div>
    <div><Footer /></div>
  </div>
</template>

