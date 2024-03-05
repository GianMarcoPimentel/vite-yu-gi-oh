<script >
// importo axios dopo averlo scaricvato

import axios from 'axios';

import CardList from './components/CardList.vue';

// importo l'AppPagination
import AppPagination from './components/AppPagination.vue';

//importo la scelta del tipo di carta
import AppCardType from './components/AppCardType.vue';


import { store } from './store.js'

export default {
    data() {
      return {
        cards: [],

        archetype:[],
        // dichiaro lo store
        store,

      }
    },

    created() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=10').then(res => {
        console.dir(res.data.data);
        this.store.cards = res.data.data
      }).catch(err => {
        console.log(err);
      })

      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then(res => {
         console.dir(res.data)
         this.store.archetype = res.data;
        /*  console.log(store.cards.length) */
         console.dir(this.store.archetype)
      }).catch(err => {
        console.log(err);
      })
      
    },


    components: {
      CardList,
      AppPagination,
      AppCardType,
    },

    methods: {
      searchArchetype() {
        console.log("modificato arcotipo:"+ this.store.searchArchetype)
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=10&archetype=' + this.store.searchArchetype).then(res => {
          /* console.log(res.data.data) */
          console.dir(res)
          this.store.cards = res.data.data
          console.log(this.store.cards)
          

        })
      }
    },

}
</script>

<template>
    <AppPagination></AppPagination>
    <AppCardType @search="searchArchetype()"></AppCardType>
    <CardList ></CardList>
  
  
</template>

<style lang="scss">
@use './styles/_variables.scss' as *;
#app{
  background-color: $backgrond-app;
}
</style>
