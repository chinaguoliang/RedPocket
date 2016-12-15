<template>
    <div>
        <header-component/>
        <div>this is template body {{msg}}</div>
        <other-component/>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'和尚洗头用飘柔'
            }
        }
    }
</script>
