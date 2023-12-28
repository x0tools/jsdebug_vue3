<template>
    <v-md-v-md-preview :text="mdtext"> 
    </v-md-v-md-preview>
</template>
<script>
export default {
    setup() {
        let mdtext = "";
        return {mdtext}
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

</style>