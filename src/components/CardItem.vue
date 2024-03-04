<script>
export default {
    name:'CardItem',


    props: {
        card: Object,
    },
}
</script>

<template>
    <li class="card">
        <img :src="card.card_images[0].image_url" :alt="card.name">
        <h3>{{ card.name }} </h3><br>
        <h4>{{ card.type }}</h4>
    </li>
</template>

<style>
.card{
    
    display: flex;
    flex-flow: column;
    
    width: calc(100% / 4 - (30px / 4 * 3));

    text-align: center;

    background-color: orange;
    padding-bottom: 20px;

    h4{
        color: black;
    }
}
</style>