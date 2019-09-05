<template>
    <div class="home">
        <div class="font30 bl lh-2">mixin测试</div>
        <div class="box-s dib"></div>
        <div class="box-c dib"></div>
        <div class="box-t dib"></div>
        <div class="box-k dib"></div>
    </div>
</template>
<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {}
    }
</script>
<style lang="less">
    .box-s {
        background-color: rebeccapurple;
        .square(100)
    }

    .box-c {
        background-color: turquoise;
        .circle(100)
    }

    .box-t {
        .size(200, 100);
        background-color: gold;
    }

    .box-k {
        .triangle(100, 100, tan, t)
    }
</style>
