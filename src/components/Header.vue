<template>
    <div class="header" v-bind:class="{background: isMode}">
        <h3>{{ title }}</h3>
        <div class="mode-change" v-on:click="onClick">
        <i class="fa fa-moon-o" aria-hidden="true"></i>
        <p>Dark mode</p>
        </div>
    </div>
</template>

<script>
import { bus } from '../main'
export default {
    name: 'Header',
    props: {
        title: String,
        mode: Boolean
    },
    data() {
        return {
            active: false,
            isMode: false
        }
    },
    methods: {
        onClick() {
            let self = this;
            self.isMode =! self.isMode;
            self.active =! self.active;  
            let value = self.active;
            bus.$emit('toggle', value);
        }
    }
}
</script>

<style lang="sass">
    .header 
        background-color: rgb(43, 57, 69)
        display: flex
        justify-content: space-between
        padding: 0.5rem 7rem
        align-items: center
    .mode-change
        cursor: pointer
        display: flex
    .background
        background: #ffffff
        color: black   
</style>