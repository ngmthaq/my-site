<script setup lang="ts">
import { useYupForm } from "@/hooks";
import { OTP_FORM_SCHEMA } from "@/models";

const { defineField, errors } = useYupForm(OTP_FORM_SCHEMA);

const [otp, otpAttrs] = defineField("otp");
</script>

<template>
  <InputOtp v-model="otp" v-bind="otpAttrs" :invalid="Boolean(errors.otp)" />
</template>

<style scoped lang="scss"></style>
