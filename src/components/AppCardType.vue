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
            <select name="archetype" id="archetype"
            v-model="store.searchArchetype"
            @change="$emit('search')" 
            >
                <option :value="currentArchetypeName.archetype_name"
                v-for="currentArchetypeName in store.archetype"
                >
                {{ currentArchetypeName.archetype_name }}
                </option>
            </select>
            <!-- <input type="search"    
            v-model="store.searchCard"
            >
            <button 
            @click="$emit('search')" 
            class="btn"
            ><i class="fa-solid fa-chevron-down"></i></button> -->

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