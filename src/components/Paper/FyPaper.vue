<script>
    export default {
        name: "fy-paper"
    }
</script>

<template>
    <div class="paper-container">
        <section class="paper-holder">
            <slot></slot>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/breakpoints";
.paper-container{
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
    background-color: white;
    border-radius: 32px;
    width: 584px;
    
    @media (max-width: $mobile) {
        width: 312px;
    }
}
.paper-holder {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    @media (max-width: $mobile) {
        padding: 24px;
    }
    
}
</style>