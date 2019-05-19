<template>
  <v-ons-page>
        <v-ons-list>
          <v-ons-list-item :modifier="md ? 'nodivider' : ''">
            <div class="left">
              <v-ons-icon icon="md-phone" class="list-item__icon"></v-ons-icon>
            </div>
              <label class="center">
              <v-ons-input style="width:100%" float maxlength="40"
                  placeholder="Phone Number EX: 123-123-1234"
                  v-model="phoneNumber"
                  type="text"
              >
              </v-ons-input>
              </label>
          </v-ons-list-item>
          <v-ons-button  @click="getInformation()" modifier="large" class="button-margin">Find</v-ons-button>
        </v-ons-list>


        <v-ons-list>
          <v-ons-list-header>Carrier</v-ons-list-header>
          <v-ons-list-item :modifier="md ? 'nodivider' : ''">
              <label class="center">
              <v-ons-input style="width:100%" float maxlength="80"
                  placeholder="Carrier"
                  v-model="returnedInformation.carrier"
                  type="text"
                  readonly
              >
              </v-ons-input>
              </label>
          </v-ons-list-item>
          
          <v-ons-list-header>Line Type</v-ons-list-header>
          <v-ons-list-item :modifier="md ? 'nodivider' : ''">
              <label class="center">
              <v-ons-input style="width:100%" float maxlength="80"
                  placeholder="Line Type"
                  v-model="returnedInformation.line_type"
                  type="text"
                  readonly
              >
              </v-ons-input>
              </label>
          </v-ons-list-item>

          <div v-for="user in returnedInformation.belongs_to" :key="user.id">
            
            <v-ons-list-header>First Name</v-ons-list-header>
            <v-ons-list-item  :modifier="md ? 'nodivider' : ''">
              <label class="center">
              <v-ons-input style="width:100%" float maxlength="80"
                  placeholder="First Name"
                  v-model="user.firstname"
                  type="text"
                  readonly
              >
              </v-ons-input>
              </label>
            </v-ons-list-item>

            <v-ons-list-header>Middle Initial</v-ons-list-header>
            <v-ons-list-item  :modifier="md ? 'nodivider' : ''">
              <label class="center">
              <v-ons-input style="width:100%" float maxlength="80"
                  placeholder="Middle Initial"
                  v-model="user.middlename"
                  type="text"
                  readonly
              >
              </v-ons-input>
              </label>
            </v-ons-list-item>

            <v-ons-list-header>Last Name</v-ons-list-header>
            <v-ons-list-item  :modifier="md ? 'nodivider' : ''">
              <label class="center">
              <v-ons-input style="width:100%" float maxlength="80"
                  placeholder="Last Name"
                  v-model="user.lastname"
                  type="text"
                  readonly
              >
              </v-ons-input>
              </label>
            </v-ons-list-item>

            <v-ons-list-header>Gender</v-ons-list-header>
            <v-ons-list-item  :modifier="md ? 'nodivider' : ''">
              <label class="center">
              <v-ons-input style="width:100%" float maxlength="80"
                  placeholder="Gender"
                  v-model="user.gender"
                  type="text"
                  readonly
              >
              </v-ons-input>
              </label>
            </v-ons-list-item>
          
          </div>

          <div v-for="(address,index) in returnedInformation.current_addresses" :key="index">
              
              <v-ons-list-header>City</v-ons-list-header>
              <v-ons-list-item  :modifier="md ? 'nodivider' : ''">
                <label class="center">
                <v-ons-input style="width:100%" float maxlength="80"
                    placeholder="City"
                    v-model="address.city"
                    type="text"
                    readonly
                >
                </v-ons-input>
                </label>
             </v-ons-list-item>

            <v-ons-list-header>State</v-ons-list-header>
            <v-ons-list-item  :modifier="md ? 'nodivider' : ''">
                <label class="center">
                <v-ons-input style="width:100%" float maxlength="80"
                    placeholder="State"
                    v-model="address.state_code"
                    type="text"
                    readonly
                >
                </v-ons-input>
                </label>
            </v-ons-list-item>

            <v-ons-list-header>Postal Code</v-ons-list-header>
            <v-ons-list-item  :modifier="md ? 'nodivider' : ''">
                <label class="center">
                <v-ons-input style="width:100%" float maxlength="80"
                    placeholder="State"
                    v-model="address.postal_code"
                    type="text"
                    readonly
                >
                </v-ons-input>
                </label>
            </v-ons-list-item>

            <v-ons-list-header>Address</v-ons-list-header>
            <v-ons-list-item  :modifier="md ? 'nodivider' : ''">
                <label class="center">
                <v-ons-input style="width:100%" float maxlength="80"
                    placeholder="State"
                    v-model="address.street_line_1"
                    type="text"
                    readonly
                >
                </v-ons-input>
                </label>
            </v-ons-list-item>

          </div>
           
          
        </v-ons-list>

    
  </v-ons-page>
</template>

<script>

export default {
  data () 
  {
    return {
      phoneNumber: '',
      APIKEY:'xxxxx',
      URL: 'https://proapi.whitepages.com/3.0',
      returnedInformation: {},
      btnClicked: false
    }
  },
  methods: 
  {
    getInformation() {
      
      fetch(`${this.URL}/phone.json?api_key=${this.APIKEY}&phone=${this.phoneNumber}`).then((response) => {
        return response.json();
      }).then((myJson) => { 
        this.returnedInformation = myJson
      })
      

    }
  },
  created () 
  {
  
  }
}
</script>
