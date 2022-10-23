<script>
    export default {
        name: 'fy-button',
        props: {
            label: {
                type: String,
                default: "Button",
                required: true
            }
        }
    }
</script>

<template>
    <button :class="fybutton" type="button">{{label}}</button>
</template>

<style lang="scss">
@import "../../styles/variables";
button {
    
    background-color: $primary;
}
</style>