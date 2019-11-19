<template>
    <div>
        <h4>hello</h4>
        <h4>{{convertir}}</h4>
    </div>
</template>

<script>

    export default {
        name: "ConvertirMoneda",
        props:{
            moneda:{
                type:String,
                required:true
            },
            convertir:{
                type: Number,
                required: true
            },
            monto:{
                type:Number,
                required:true
            }
        }
    }
</script>

<style scoped>

</style>