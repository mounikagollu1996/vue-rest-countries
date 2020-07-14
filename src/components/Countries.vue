<template>
    <div class="container">
        <div class="main-wrapper">
            <div class="country-wrapper" v-for="country in countries" :key="country.name">
                <img class="flag" :src="country.flag">
                <h4>{{ country.name}}</h4>
                <p>Population: {{ country.population }}</p>
                <p>Region: {{ country.region }}</p>
                <p>Capital: {{country.capital}}</p>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'Countries',
    data() {
        return {
            countries: []
        }
    },
    mounted() {
        this.$http.get('https://restcountries.eu/rest/v2/all')
        .then( function(res) {
            console.log(res.body);
            this.countries = res.body;
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
    .main-wrapper
        display: flex
        flex-wrap: wrap 
        justify-content: space-between
        width: 85%
        margin: auto
        padding-top: 5rem    
    .country-wrapper
        width: 270px
        height: 300px 
        margin-bottom: 2rem
        background: rgb(43, 57, 69)
        border-radius: 8px
    .flag
        width: 270px
        border-radius: 8px 8px 0 0
        height: 150px
    p
        margin: 0 
        padding-left: 1rem 
    h4
        margin: 0  
        padding-left: 1rem  
        padding-top: 1rem  
              
</style>

