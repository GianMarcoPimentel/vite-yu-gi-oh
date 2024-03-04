<script>
// importo l'AppPagination
import AppPagination from './AppPagination.vue';

//importo la CardItem
import CardItem from './CardItem.vue';

import AppCardType from './AppCardType.vue';

import {store} from '../store.js'

export default {
    name: 'CardList',

    components: {
        AppPagination,
        CardItem,
        AppCardType,
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