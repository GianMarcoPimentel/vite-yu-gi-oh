<script>
import {store} from '../store.js';
export default{
    name:'AppCardType',

    data() {
        return {
            store,
        }
    },
}
</script> 

<template>
    <div class="container">
        <div class="card-type">

            <input type="search" >
            <button @click="$emit('search')" class="btn"><i class="fa-solid fa-chevron-down"></i></button>

<!--             <small> Normal </small>
 --><!--             <small><i class="fa-solid fa-chevron-down"></i></small>
 -->        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    padding: 24px 0px;
}
.card-type{
    display: flex;

}
</style>