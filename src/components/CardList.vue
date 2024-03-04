<script>
// importo l'AppPagination
import AppPagination from './AppPagination.vue';

//importo la CardItem
import CardItem from './CardItem.vue';

import {store} from '../store.js'

export default {
    name: 'CardList',

    components: {
        AppPagination,
        CardItem,
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

ul{
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    gap: 30px;

    background-color: white;
    padding: 30px;
}
</style>