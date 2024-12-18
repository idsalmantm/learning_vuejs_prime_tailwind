<template>
  <div class="card flex justify-center">
    <InputText type="text" v-model="value" />
    <Button label="Verify" />
  </div>
  <div>
    <ToggleSwitch v-model="checked1" />
    <ToggleSwitch v-model="checked2" :dt="amberSwitch" />
  </div>
  <div>
    <h1>Home</h1>
    <div class="card">
        <Toast />
        <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
                <span>Drag and drop files to here to upload.</span>
            </template>
        </FileUpload>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const onAdvancedUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
const checked1 = ref(true);
const checked2 = ref(true);
const amberSwitch = ref({
  handle: {
    borderRadius: '3px'
  },
  colorScheme: {
    light: {
      root: {
        checkedBackground: '{amber.500}',
        checkedHoverBackground: '{amber.600}',
        borderRadius: '4px'
      },
      handle: {
        checkedBackground: '{amber.50}',
        checkedHoverBackground: '{amber.100}'
      }
    },
    dark: {
      root: {
        checkedBackground: '{amber.400}',
        checkedHoverBackground: '{amber.300}',
        borderRadius: '4px'
      },
      handle: {
        checkedBackground: '{amber.900}',
        checkedHoverBackground: '{amber.800}'
      }
    }
  }
});
</script>
