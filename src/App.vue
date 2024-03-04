<script >
// importo axios dopo averlo scaricvato

import axios from 'axios';

import CardList from './components/CardList.vue';



import { store } from './store.js'

export default {
    data() {
      return {
        cards: [],

        // dichiaro lo store
        store,

      }
    },

    created() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=10').then(res => {
        console.log(res.data.data);
        this.store.cards = res.data.data
      }).catch(err => {
        console.log(err);
      })
    },


    components: {
      CardList,
      
    },

}
</script>

<template>

    <CardList ></CardList>
  
 
</template>

<style lang="scss">
@use './styles/_variables.scss' as *;
#app{
  background-color: $backgrond-app;
}
</style>
