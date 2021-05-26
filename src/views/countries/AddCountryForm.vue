<template>
      <CCol md="6">
        <CCard>
          <CForm @submit="addCountries">
          <CCardBody>
              <CInput
                v-model="countryName"
                type="text"
                horizontal
                placeholder="Country Name..."
              />
              <CInput
                v-model="continentId"
                type="text"
                horizontal
                placeholder="Continent Id"
              />
              <CInput
                v-model="countryInitial"
                type="text"
                horizontal
                placeholder="Country Initial"
              />
              <CInput
                v-model="countryCode"
                type="text"
                horizontal
                placeholder="Country code..."
              />
              <CInput
                v-model="countryDialingCode"
                type="text"
                horizontal
                placeholder="Country dialing code..."
              />
              <CTextarea
                v-model="countryDescription"
                type="text"
                horizontal
                placeholder="Country Description..."
              />
              <CInput
                v-model="countryAlias"
                type="text"
                horizontal
                placeholder="Country alias...."
              />
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    
</template>

<script>

// import Forms from '../base/Forms'
// import Forms from '../base/Forms.vue'
import axios from 'axios'
export default {
    name: 'AddCountryForm',
    components: {
    },
    data(){

        return{
        countryName: '',
        countryInitial: '',
        countryAlias: '',
        countryCode: '',
        countryDialingCode: '',
        countryDescription: '',
        continentId: ''

        }
    },
    methods:{
      
      addCountries(){
        //   var country = {};
        // axios.post("http://localhost:8090/api/countries", {
        //           countryName: this.countryName,
        //           countryAlias: this.countryAlias,
        //           countryDescription: this.countryDescription,
        //           countryCode: this.countryCode,
        //           countryDialingCode: this.countryDialingCode,
        //           countryInitial: this.countryInitial}).then((response) => console.log(response)).catch(error => console.log(error))
          axios({
              method: 'POST',
              url:"http://localhost:8090/api/countries",
              data = JSON.stringify({
                  countryName: this.countryName,
                  countryAlias: this.countryAlias,
                  countryDescription: this.countryDescription,
                  countryCode: this.countryCode,
                  countryDialingCode: this.countryDialingCode,
                  countryInitial: this.countryInitial})
              }).then((response) => console.log(response) )
          .catch(error => console.log(error))


      }

    }
}
</script>

<style scoped>

</style>