<script setup>
import { defineAsyncComponent } from 'vue'

const RemoteComponent = defineAsyncComponent(() =>
  import('remoteApp/HelloRemote')
)
</script>

<template>
  <div>
    <h1>Nuxt Host</h1>
    <RemoteComponent />
  </div>
</template>
