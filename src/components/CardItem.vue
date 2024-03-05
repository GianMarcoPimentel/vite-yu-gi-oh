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
        <h4>{{ card.race }}</h4>
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
</style>