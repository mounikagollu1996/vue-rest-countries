<template>
    <div class="container">
        <div class="main-wrapper">
            <div class="country-wrapper" v-for="country in countries" :key="country.name">
                <router-link :to="{name: '/country/countryId', params: {countryId: country.name}}">
                    <img class="flag" :src="country.flag">
                    <h4>{{ country.name}}</h4>
                    <p>Population: {{ country.population }}</p>
                    <p>Region: {{ country.region }}</p>
                    <p>Capital: {{country.capital}}</p>
                 </router-link>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name: 'Countries',
    data() {
        return {
            countries: [],
        }
    },

    mounted() {
        this.$http.get('https://restcountries.eu/rest/v2/all')
        .then( function(res) {
            this.countries = res.body;
        })
        .catch( function(error) {
            console.log('Error: ', error);
        })
    },
    
}
</script>

<style lang="sass">
    .container
        background: rgb(32, 44, 55)
        height: 100%
    .main-wrapper
        display: flex
        flex-wrap: wrap 
        justify-content: space-between
        width: 85%
        margin: auto
        padding-top: 5rem    
    .country-wrapper
        cursor: pointer
        width: 270px
        height: 300px 
        margin-bottom: 2rem
        background: rgb(43, 57, 69)
        border-radius: 8px
        a
            text-decoration: none
            color: #ffffff
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