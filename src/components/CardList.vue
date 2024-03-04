<script>
// importo l'AppPagination
import AppPagination from './AppPagination.vue';

import {store} from '../store.js'

export default {
    name: 'CardList',

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <AppPagination></AppPagination>
     <ul>
    <li v-for="currentCard in store.cards">
      {{ currentCard.name  }}
    </li>
  </ul>
</template>

<style lang="scss">

</style>