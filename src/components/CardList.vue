<script>
// importo l'AppPagination
import AppPagination from './AppPagination.vue';

export default {
    name: 'CardList',


    components: {
        AppPagination,
    },
    props: {
        cards: Array,
    },
}
</script>

<template>
    <AppPagination></AppPagination>
     <ul>
    <li v-for="currentCard in cards">
      {{ currentCard.name  }}
    </li>
  </ul>
</template>

<style lang="scss">

</style>