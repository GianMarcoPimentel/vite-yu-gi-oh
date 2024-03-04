<script>
export default{
    name:'AppCardType',
}
</script> 

<template>
    <div class="container">
        <div class="card-type">
            <small>Alien</small>
            <small><i class="fa-solid fa-chevron-down"></i></small>
        </div>
    </div>
</template>

<style lang="scss">
.card-type{
    
    width: 100px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    color: black;
    margin-bottom: 42px;

    border-radius: 8px;
}
</style>