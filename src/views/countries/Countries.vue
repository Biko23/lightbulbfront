<template>
  <CCardBody>
    <CDataTable
      :items="countries"
      :fields="fields"
      column-filter
      table-filter
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
    >
      <template #update="{item}">
        <td class="py-2">
          <CButton
            color="primary"
            variant="outline"
            square
            size="sm"
            @click="loadCountryModel(item)"
          >
            update
          </CButton>
          
        <CModal
        :title="countryName"
        color="warning"
        @update:show="updateCountry"
        :show.sync="warningModal"
        >
          <CCardBody>
              <CInput
                v-model="countryName"
                type="text"
                horizontal
                :placeholder= "countryName"
              />
              <CInput
                v-model="continentId"
                type="text"
                horizontal
                :placeholder= "continentId"
              />
              <CInput
                v-model="countryInitial"
                type="text"
                horizontal
                :placeholder= "countryInitial"
              />
              <CInput
                v-model="countryCode"
                type="text"
                horizontal
                :placeholder= "countryCode"
              />
              <CInput
                v-model="countryDialingCode"
                type="text"
                horizontal
                :placeholder= "countryDialingCode"
              />
              <CTextarea
                v-model="countryDescription"
                type="text"
                horizontal
                :placeholder= "countryDescription"
              />
              <CInput
                v-model="countryAlias"
                type="text"
                horizontal
                :placeholder= "countryAlias"
              />
          </CCardBody>
        </CModal>
        </td>
      </template>
      <template #show_details="{item}">
        <td class="py-2">
          <CButton
            color="danger"
            variant="outline"
            square
            size="sm"
            @click="deleteCountry(item)"
          >
            Delete
          </CButton>
        </td>
      </template>
    </CDataTable>
  </CCardBody>
</template>



<script>
// import Table from '../base/Table'
// import Table from '../base/Table.vue'
import CTableWrapper from '../base/Table'
import StandardButtons from '../buttons/StandardButtons'
import axios from 'axios'
export default {
    name: 'countriesList',
  components: { CTableWrapper,
                StandardButtons },
  data(){
      return {
          countries: [],
          fields:  [{key: 'countryId'},
                    {key:'countryName'},
                    {key: 'countryDescription'},
                    {key: 'update', label: '', _style: 'width:1%', sorter: false, filter: false
                    },
                    {key: 'show_details', label: '', _style: 'width:1%', sorter: false, filter: false
                    }],
            
            collapseDuration: 0,
            details: [],
            warningModal: false,

            countryId: '',
            countryName: '',
            countryInitial: '',
            countryAlias: '',
            countryCode: '',
            countryDialingCode: '',
            countryDescription: '',
            continentId: '',
      }
  },

  methods:{
      getCountries(){
        //   var countries = []
          axios.get("http://localhost:8090/api/countries")
          .then((response) => {
            //   console.log(response)
              this.countries = response.data;

          }).catch(error => console.log(error))
        //       console.log(countries)

        //   return countries;

      },
      deleteCountry(item){
          var countryId = item.countryId
          
          console.log(countryId);

          axios.delete(`http://localhost:8090/api/countries/${countryId}`)
          .then((response) => {
              console.log(response);
          }).catch(error => console.log(error))

      },
      loadCountryModel(item){
          this.warningModal = true
          this.countryId = item.countryId
          this.countryName = item.countryName
          this.countryDialingCode = item.countryDialingCode
          this.countryDescription = item.countryDescription
          this.countryInitial = item.countryInitial
          this.countryCode = item.countryCode
          this.countryAlias = item.countryAlias
          this.continentId = item.continentId
                  //   window.location.href='update'

      },
      updateCountry(status, evt, accept){
          if(accept){
            //   alert("You have accepted.......");
                axios.patch(`http://localhost:8090/api/countries/${this.countryId}`, JSON.stringify({
                  countryName: this.countryName,
                  countryAlias: this.countryAlias,
                  countryDescription: this.countryDescription,
                  countryCode: this.countryCode,
                  countryDialingCode: this.countryDialingCode,
                  countryInitial: this.countryInitial,
                  continentId: this.continentId}))
                  .then((response) => console.log(response))
                  .catch(error => console.log(error))
                }
        //   var country = {};
        //   axios({
        //       method: 'PATCH',
        //       url:`http://localhost:8090/api/countries/${this.countryId}`,
        //       data = JSON.stringify({
        //           countryName: this.countryName,
        //           countryAlias: this.countryAlias,
        //           countryDescription: this.countryDescription,
        //           countryCode: this.countryCode,
        //           countryDialingCode: this.countryDialingCode,
        //           countryInitial: this.countryInitial,
        //           continentId: this.continentId})
        //       }).then((response) => console.log(response) )
        //   .catch(error => console.log(error))



      },
    toggleDetails (item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }

  },
  created(){
      this.getCountries();
  }



 


}
</script>