<script >
// importo axios dopo averlo scaricvato

import axios from 'axios';

import CardList from './components/CardList.vue';

export default {
    data() {
      return {
        cards: [],
      }
    },

    created() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=10').then(res => {
        console.log(res.data.data);
        this.cards = res.data.data
      })
    },


    components: {
      CardList,
    },

}
</script>

<template>
 <CardList :cards="cards"></CardList>
 <!--  <ul>
    <li v-for="currentCard in cards">
      {{ currentCard.name  }}
    </li>
  </ul> -->
</template>

<style lang="scss">

</style>
