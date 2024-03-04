<script>
// importo lo store e lo dichiaro nei data per capire 
//che ha a che fare con questa section
import {store} from '../store.js'
export default {
    name: 'AppPagination',

    
    data(){
        return {
            store,
        }
    }
}
</script>

<template>
    
        <nav>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTti9YDW4-vfjHNSo1oelG_tAQ0O6WhS_f5gbF9zWFg&s" alt="">
            <h1>
                Yu-Gi-Ho! API
            </h1>
        </nav>
   

</template>

<style lang="scss">
    nav{
        height: 60px;
        width: 100%;
        background-color: white;
        color: black;
        margin-bottom: 42px;

        display: flex;
        align-items: center;
        gap: 20px;

        img{
            height: 100%;
        }
    }
</style>