<template>
<div class="container">    
            <div class="column-main" v-for="country in selectedCountry" :key="country.name">
                <div class="image-box">
                    <img :src="country.flag" alt="country flag"/>
                </div>
                <div class="description">
                    <div class="content">
                        <div class="wrapper">
                            <h4>{{country.name}}</h4>
                            <p class="">Native Name: {{country.nativeName}}</p>
                            <p class="">Population: {{country.population}}</p>
                            <p class="">Region: {{country.region}}</p>
                            <p class="">Sub Region: {{country.subRegion}}</p>
                            <p class="">Capital: {{country.capital}}</p>
                        </div>
                        <div class="">
                            <p class="">Top Level Domain: {{country.topLevelDomain}}</p>
                            <p class="">Currencies: {{country.currencies[0].code}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
</template>


<script>
export default {
    data() {
        return {
            countryId: this.$route.params.countryId,
            selectedCountry: []
        }
    },
    mounted() {
        this.$http.get('https://restcountries.eu/rest/v2/name/{name}',{
            params: {
                name: `${this.countryId}`
            }
        })
        .then(function(res) {
            console.log(res.body);
            this.selectedCountry = res.body;
        })
         .catch( function(error) {
            console.log('Error: ', error);
        })
    }
}
</script>


<style lang="sass">
    .container
        background: rgb(32, 44, 55) 
        height: 760px
    .column-main
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        width: 90%
        margin: auto
        padding-top: 10rem
        height: 598px
        align-items: center
    .image-box
        width: 45%
        height: 400px
        img
            height: inherit 
            width: 100%
    .description
        display: flex
        flex-direction: column
        width: 50%
    .content
        display: flex
        flex-wrap: wrap


</style>