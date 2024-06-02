<script lang="ts" setup>
import yup from '@/plugins/yup';
import { translateYupError } from '@/common/helper';

const { errors } = useForm<{ name: string }>({
  validationSchema: {
    name: yup.string().required().label('Name')
  }
});
const { value: name } = useField<string>('name');
</script>
<template>
  <div>{{ $t('common.button.save') }}</div>
  <v-text-field
    v-model="name"
    :error-messages="translateYupError(errors.name || '')"
  ></v-text-field>
  {{ { errors } }}
</template>
<style lang="scss" scoped></style>
