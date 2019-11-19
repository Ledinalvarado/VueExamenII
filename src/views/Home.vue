<template>
    <div id="home">
        <h5>Seleccione la Moneda Base</h5>
        <form action="">
            <select v-model="moneda" @change="MonedaBase" id="baseMoneda" class="form-control-sm">
                <option value="USD">Dolar Americano</option>
                <option value="AUD">Dolar Australiano</option>
                <option value="CAD">Dolar Canadiense</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Libra Esterlina</option>
            </select>
        </form>


        <h5>Seleccione la Moneda para Convertir</h5>
        <form action="">
            <select v-model="cambio" @change="ConvertirMoneda" id="cambioMoneda" class="form-control-sm">
                <option value="USD">Dolar Americano</option>
                <option value="AUD">Dolar Australiano</option>
                <option value="CAD">Dolar Canadiense</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Libra Esterlina</option>
            </select>
        </form>
        <input type="text" v-model="monto" class="form-control-sm">
        <button type="submit" @click.prevent="Monto" >Monto</button>

    </div>
</template>

<script>
    import axios from 'axios'
    import ConvertirMoneda from '../components/ConvertirMoneda'

    export default {
        name: "Home",
        components: {
            ConvertirMoneda
        },
        data: function () {
            return {
                moneda: '',
                cambio:'',
                base: {},
                convertir: {},
                monto:''
            }
        },
        methods: {
            MonedaBase() {
                axios.get(`https://api.exchangerate-api.com/v4/latest/${this.moneda}`)
                    .then((res) => {
                        this.base = res.data.rates;
                        console.log(res);
                    });
            },
            ConvertirMoneda() {
                axios.get(`https://api.exchangerate-api.com/v4/latest/${this.cambio}`)
                    .then((res) => {
                        return this.convertir = res.data.rates;

                        console.log(res);

                    })
            },
            Monto(){
                let valorBase = document.getElementById('baseMoneda').value;
                let valorCambi = document.getElementById('cambioMoneda').value;
                console.log( valorBase);
                // console.log(this.monto);

            }

        }
    }
</script>

<style scoped>

</style>