<template>
    <div>
        <h3>The Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                counter: 0
            };
        }
    }
</script>
<style scoped>

</style>
