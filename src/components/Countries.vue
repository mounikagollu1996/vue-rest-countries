<template>
    <div class="main-column" v-bind:class="{white: isMode}">
        <v-select v-bind:class="{filterMode: isMode}" :value="selected" @input="setSelected" placeholder="Filter by region" :options="options"></v-select>
        <input v-bind:class="{searchMode: isMode}" v-model="searchQuery" class="form-control" type="text" placeholder="Search for a country..."
            aria-label="Search"/>

        <div class="main-wrapper">
            <div class="country-wrapper" v-for="country in resultQuery" :key="country.name">
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
import {bus} from '../main.js';
export default {
    name: 'Countries',
    data() {
        return {
            countries: [],
            options: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania','Polar'],
            searchQuery: null,
            isMode: false
        }
    },

    created() {
        bus.$on('toggle', (data) => {
            var _recent = this;
            _recent.isMode = data;
        });
    },

    computed: {
        resultQuery() {
            if(this.searchQuery){
                
                return this.countries.filter(country => {
                    let name = country.name.toLowerCase();
                    let text = this.searchQuery.toLowerCase();
                    if(name.search(text) > -1){
                        return country;
                    }
                })
            }
            else {
                return this.countries;
            }
            
        }
    },

    methods: {
        setSelected(value) {
            var _this = this;
            _this.$http.get('https://restcountries.eu/rest/v2/region/{region}',{
                params: {
                    region: value
                }
            })
            .then(function(res) {
                _this.countries = res.body;
            })
        },
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
    .main-column
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
    .vs__clear
        display: none  
    .vs__dropdown-toggle
        display: flex
        float: right
        margin: 2rem 7rem 0 0
        background: #2b3945
        border-radius: 9px
    .vs__search
        background: none 
        height: 35px 
        border: 1px solid #2b3945
        border: 1px solid #2b3945
    .vs__search::placeholder
        color: #ffffff
        font-size: 16px    
    .v-select
        position: absolute
        right: 0
    .vs__dropdown-menu
        list-style-type: none
        background: #2b3945
        border-radius: 9px
        color: #fffffff
        margin: 4rem 0 0 4.5rem   
        width: 110px 
    .vs__selected
        position: relative
        left: 6rem               
    .vs__actions
        position: relative
        right: 1.5rem
        top: 0.5rem 
    .form-control
        background: #2b3945
        border: 1px solid #2b3945
        border-radius: 8px
        padding: 0.8rem 1rem
        margin: 2rem 0 0 7rem
        width: 30%    
        color: #ffffff  
    .form-control::placeholder
        color: #ffffff  
        font-size: 16px 
    .white
        background: #f8f8f8   
    .background
        background: #ffffff
        color: black        
          
</style>