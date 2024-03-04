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
        <img :src="card.card_images[0].image_url_cropped" :alt="card.name">
        {{ card.name }}
    </li>
</template>

<style>

</style>