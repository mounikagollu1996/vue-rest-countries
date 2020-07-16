<template>
    <div class="main-class"> 
        <router-link to="/">
            <button class="back-button">Back</button>   
        </router-link>
        <div class="column-main">
            <div class="image-box">
                <img :src="selectedCountry.flag" alt="country flag"/>
            </div>
            <div class="description">
                <div class="content">
                    <div class="wrapper">
                        <h4>{{selectedCountry.name}}</h4>
                        <p class="">Native Name: {{selectedCountry.nativeName}}</p>
                        <p class="">Population: {{selectedCountry.population}}</p>
                        <p class="">Region: {{selectedCountry.region}}</p>
                        <p class="">Sub Region: {{selectedCountry.subregion}}</p>
                        <p class="">Capital: {{selectedCountry.capital}}</p>
                    </div>
                    <div class="">
                        <p class="">Top Level Domain: {{selectedCountry.topLevelDomain}}</p>
                        <p class="">Currencies: {{currencyCode}}</p>
                        <div class="lang">
                            Languages: 
                            <p v-for="lang in selectedCountry.languages" :key="lang.name">
                                {{lang.name}}
                            </p>
                        </div>   
                    </div>
                    <div class="borders">
                        <button v-on:click="updateCountry(border)" v-for="border in selectedCountry.borders" :key="border">  
                            <router-link :to="{name:'/country/countryId', params: {countryId: borderCountry}}">
                                {{border}}
                            </router-link> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>      
</template>


<script>
import {bus} from '../main.js';
export default {
    data() {
        return {
            countryId: this.$route.params.countryId,
            selectedCountry: [],
            currencyCode: '',
            borderCountry: '',
            isMode: false
        }
    },

    created() {
        bus.$on('toggle', (data) => {
            var _here = this;
            _here.isMode = data;
        });
    },
    methods: {
       updateCountry(border) {
           var _this = this;
           _this.$http.get('https://restcountries.eu/rest/v2/all')
           .then(function(res) {
               res.body.filter(country => {
                   if(country.alpha3Code === border)
                   {
                       _this.selectedCountry = country;
                       this.currencyCode = country.currencies[0].code;
                       _this.borderCountry = country.name
                   }
               })
           })
       },
    },

    mounted() {
        console.log(this.countryId);
        this.$http.get('https://restcountries.eu/rest/v2/name/{name}',{
            params: {
                name: `${this.countryId}`
            }
        })
        .then(function(res) {
             this.selectedCountry = res.body[0];
             this.currencyCode = res.body[0].currencies[0].code;
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
    .main-class
        
    .white
        background: #f8f8f8      
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
    .lang
        display: flex
        flex-wrap: wrap
        padding-left: 1rem
    .borders
        display: flex
        flex-wrap: wrap    
        padding-left: 1rem
    .back-button
        width: 100px
        height: 40px
        background: #2b3945
        border: 1px solid #2b3945
        color: white
        font-size: 16px  
        position: relative
        top: 5rem
        left: 5rem  
    .borders   
        button
            background: #2B3945
            border: 1px solid #2B3945
            padding: 1rem 2rem
            margin: 1rem 0 0 1rem
            a
                color: white
                text-decoration: none                  
</style>