import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
vue.use(vuex)

const store = new vuex.Store({
    state:{
        countries: []
    },

    mutations:{
        showCountries(state){
            axios.get("http://localhost:8090/api/countries")
            .then((response) => {
                this.state = response
            }).catch(console.error(error))
        }
    }
})