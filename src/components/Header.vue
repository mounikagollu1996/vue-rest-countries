<template>
    <div class="header" v-bind:style="mode ? 'background: rgb(43, 57, 69);' : 'background: white;'">
        <h3>{{ title }}</h3>
        <p>Dark mode</p>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
        mode: Boolean
    }
}
</script>

<style lang="sass">
    .header 
        background-color: rgb(43, 57, 69) !important
        display: flex
        justify-content: space-between

</style>