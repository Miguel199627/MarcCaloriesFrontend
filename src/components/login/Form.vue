<template>
  <form>
    <label
      for="email1"
      class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
      >Email</label
    >
    <InputText
      id="email1"
      type="text"
      placeholder="Ingrese su email de usuario"
      class="w-full md:w-[30rem] mb-8"
      v-model="email"
    />

    <label
      for="password1"
      class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
      >Password</label
    >
    <Password
      id="password1"
      v-model="password"
      placeholder="Ingrese su password de usuario"
      :toggleMask="true"
      class="mb-4"
      fluid
      :feedback="false"
    ></Password>

    <div class="flex justify-end mt-2 mb-8 gap-8">
      <span class="font-medium no-underline ml-2 cursor-pointer text-primary"
        >¿Olvido su contraseña?</span
      >
    </div>
    <Button label="Ingresar" class="w-full" as="router-link" to="/"></Button>
  </form>
</template>
