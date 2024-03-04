<script >
// importo axios dopo averlo scaricvato

import axios from 'axios';

export default {
    data() {
      return {
        cards: [],
      }
    },

    components: {

    },

    created() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=10').then(res => {
        console.log(res.data.data);
        this.cards = res.data.data
      })
    }
}
</script>

<template>
  <ul>
    <li v-for="currentCard in cards">
      {{ currentCard.name  }}
    </li>
  </ul>
</template>

<style>

</style>
