<script>
import {store} from '../store.js'
export default {
    name:'CardItem',


    props: {
        card: Object,
    },

    data(){
        return{
            store,
        }
    },
} 
</script>

<template>
    <li class="card"
    v-if="store.cards.length < 21 ? 'Loading...' : '' "
    >
        <img :src="card.card_images[0].image_url" :alt="card.name">
        <h3>{{ card.name }} </h3><br>
        <h4>{{ card.archetype }}</h4>
    </li>
</template>

<style lang="scss">
@use '../styles/_variables.scss' as *;

.card{
    
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    
    width: calc(100% / 5 - ($cardListGap / 5 * 4));

    text-align: center;

    background-color: $backgrond-app;
    

    h4{
        color: black;
    }
}
@media screen and (max-width: 992px){
    .container{
        max-width: 600px;
    }
    .card{
        width: calc(100% / 3 - ($cardListGap / 3 * 2));
    }
}
@media screen and (max-width: 576px){
    .container{
        max-width: 400px;
    }
    .card{
        width: 100%;
    }
}
</style>