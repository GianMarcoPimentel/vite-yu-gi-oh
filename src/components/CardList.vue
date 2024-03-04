<script>
export default {
    name: 'CardList',

    props: {
        cards: [],
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

<style lang="scss">

</style>