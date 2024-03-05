<script>

//importo la CardItem
import CardItem from './CardItem.vue';


//importo il numero di carte trovate
import AppCardFound from './AppCardFound.vue';


import {store} from '../store.js'

export default {
    name: 'CardList',

    components: {
        CardItem,
        AppCardFound, 
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    
    <AppCardFound></AppCardFound>
    <div class="container">

        <ul>
            <CardItem 
            v-for="currentCard in store.cards"
            :card="currentCard"
            ></CardItem>
          
        </ul>

    </div>
</template>

<style lang="scss">
@use '../styles/_variables.scss' as *;

ul{
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    gap: $cardListGap;

    background-color: white;
    padding: 25px;
}
</style>