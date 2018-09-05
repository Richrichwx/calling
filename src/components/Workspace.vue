<template>
  <div class="workspace">
    <header-space></header-space>
    <div class="common__container">
    <sidebar></sidebar>
    <space></space>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Workspace'
}
</script>

<style>
.common__container{
    display: flex;
}
</style>
