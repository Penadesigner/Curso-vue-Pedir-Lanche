<template>
    <article class="message is-success">
        <div class="message-header">
            <p>{{ msg }}</p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Message',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>