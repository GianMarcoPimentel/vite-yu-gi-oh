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
        <img :src="card.card_images" :alt="card.name">
        {{ card.name }}
    </li>
</template>

<style>

</style>