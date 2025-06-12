<script setup>
const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout();
</script>
<template scope>
  <div class="layout-topbar">
    <div class="layout-topbar-logo-container">
      <button
        class="layout-menu-button layout-topbar-action"
        @click="toggleMenu"
      >
        <i class="pi pi-bars"></i>
      </button>
      <router-link to="/" class="layout-topbar-logo">
        <img
          :src="
            isDarkTheme
              ? '/imgs/logos/logo-white.png'
              : '/imgs/logos/logo-black.png'
          "
          alt="Logo MarcSoft"
          width="50"
        />
        <span>MarcCalories</span>
      </router-link>
    </div>
    <div class="layout-topbar-actions">
      <div class="layout-config-menu">
        <button
          type="button"
          class="layout-topbar-action"
          @click="toggleDarkMode"
        >
          <i
            :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"
          ></i>
        </button>
        <div class="relative">
          <button
            v-styleclass="{
              selector: '@next',
              enterFromClass: 'hidden',
              enterActiveClass: 'animate-scalein',
              leaveToClass: 'hidden',
              leaveActiveClass: 'animate-fadeout',
              hideOnOutsideClick: true,
            }"
            type="button"
            class="layout-topbar-action layout-topbar-action-highlight"
          >
            <i class="pi pi-palette"></i>
          </button>
          <LayoutConfigurator />
        </div>
      </div>
    </div>
  </div>
</template>
