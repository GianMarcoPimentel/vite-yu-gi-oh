<script>
// importo l'AppPagination
import AppPagination from './AppPagination.vue';

//importo la CardItem
import CardItem from './CardItem.vue';

//importo la scelta del tipo di carta
import AppCardType from './AppCardType.vue';

//importo il numero di carte trovate
import AppCardFound from './AppCardFound.vue';


import {store} from '../store.js'

export default {
    name: 'CardList',

    components: {
        AppPagination,
        CardItem,
        AppCardType,
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
    <AppPagination></AppPagination>
    <AppCardType></AppCardType>
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