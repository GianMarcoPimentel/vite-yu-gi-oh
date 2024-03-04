<script>
import {store} from '../store.js';
export default{
    name:'AppcardFound',

    data(){
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">


        <div class="card-found">
             Found {{ store.cards.length }} cards.
        </div>
    </div>
</template>

<style lang="scss">
    .card-found{
        background-color: #212529;
        padding: 15px 10px;
    }
</style>