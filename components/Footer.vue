<template>
  <NuxtErrorBoundary>
    <footer
      class="footer"
      :style="{
        backgroundColor: 'var(--navbar-background-color)',
        color: 'var(--navbar-text-color)',
      }"
    >
      <div class="content has-text-centered">
        <p>
          <strong>SpaceX App</strong> by
          <a href="https://yourwebsite.com">Admir Demir</a>. The source code is
          licensed <a href="http://opensource.org/licenses/mit"> MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
"use strict";
</script>

<style scoped>
.footer {
  padding: 2rem;
}
</style>
