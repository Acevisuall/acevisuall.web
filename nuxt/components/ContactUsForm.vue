<template>
  <div>
    <FormKit
      v-if="!completed"
      type="form"
      id="contact-us-form"
      submit-label="Send"
      data-netlify="true"
      @submit="onSubmit"
    >
      <p class="mb-4">Name (required)</p>
      <div class="flex gap-4">
        <FormKit
          type="text"
          name="first_name"
          id="first_name"
          validation="required|length:3"
          label="First Name"
        />
        <FormKit
          type="text"
          name="last_name"
          id="last_name"
          validation="required|length:3"
          label="Last Name"
        />
      </div>

      <FormKit
        class="mb-4 w-full"
        type="email"
        name="email"
        id="email"
        validation="required|email"
        label="Email (required)"
      />

      <FormKit
        type="textarea"
        name="message"
        id="message"
        label="Message (required)"
        validation="length:0,1000|required"
      />

      <FormKit type="hidden" name="form-name" value="contact us" />
    </FormKit>
    <div v-else>
      <h2 class="text-3xl font-bold">Thank you for reaching out!</h2>
      <p class="mt-4">I will get back to you as soon as possible.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const completed = ref(false)

const onSubmit = (fields: Record<string, any>) => {
  const formData = new FormData()

  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value)
  }

  $fetch('/', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: formData,
  })
    .then(() => {
      completed.value = true
    })
    .catch((error) => console.error(error))
}
</script>
