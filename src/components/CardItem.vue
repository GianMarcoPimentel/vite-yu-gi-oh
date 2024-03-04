<script>
export default {
    name:'CardItem',


    props: {
        card: Object,
    },
}
</script>

<template>
    <li>
        {{ card.name }}
    </li>
</template>

<style>

</style>