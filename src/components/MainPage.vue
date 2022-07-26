<template>
 <div id="container" class="flex flex-col">
  <div id="header" class="p-4 bg-purple-400 flex"></div>
    <div id="main" class="flex flex-col md:flex-row flex-grow">   
    <div class="p-4 bg-purple-100 flex-grow">
      <div class="bg-purple-100">
        <form  @submit.prevent id="#" class="bg-purple-200 px-6 my-32 max-w-3xl mx-auto space-y-6 text-gray-800 rounded-xl">
          <h1 class="text-3xl font-semibold text-center">Placing an order</h1>
            <div class="">
              <label for="сity">The city from which the parcel is sent</label>
              <input class="border border-gray-400 py-2 px-4 w-full rounded-lg   focus:outline-none focus:border-fuchsia-400" 
                dropdown="city" 
                type="text" 
                name="city" 
                id="city" 
                v-model="city">
            </div>

           <div class="">
            <label  for="сity1">The city to which the parcel is sent</label>
            <input class="border  border-gray-400 py-2 px-4 w-full rounded-lg  focus:outline-none focus:border-fuchsia-400"
              type="text" 
              name="cityname" 
              id="cityname" 
              v-model="cityname">
            </div>

            <div class="">
              <label  for="Type of parcel"> Type of parcel</label>
              <select class="border  border-gray-400 py-2 px-4 w-full rounded-lg  focus:outline-none focus:border-fuchsia-400" 
              type="text"  
              id="typename" 
              v-model="typename">
                <option value="gadgets">gadgets</option>
                <option value="drinks">drinks</option>
                <option value="clothes">clothes</option>
                <option value="medicines">medicines</option>
                <option value="other">other</option>
              </select>
            </div>
            
            <div class="">
              <label  for="date">Date of dispatch</label>
              <input class="border  border-gray-400 py-2 px-4 w-full rounded-lg  focus:outline-none focus:border-fuchsia-400" 
              type="date" 
              id="date" 
              name="date" 
              v-model="date">
            </div>
            
            <div>
              <h2>Description of the parcel</h2>
                <textarea class="border  border-gray-400 py-2 px-4 w-full rounded-lg  focus:outline-none focus:border-fuchsia-400"  
                name="description" 
                id="description"
                cols="30" 
                rows="10" 
                v-model="description"></textarea>
            </div>
            <div class="flex  px-6 py-3 justify-between">
            <!-- <button  type="button" class="text-red-400  border-2 border-red-400 px-4 py-2 rounded-xl hover:bg-pink-300">Delete</button> -->
          
            <div class="flex space-x-6"> 
              <button type="button" class="font-semibold bg-purple-700 hover:bg-pink-300  px-4 py-2  text-white rounded-xl" @click="onSubmit">Submit</button>
              <button type="button" class="font-semibold border-2 border-gray-800  hover:bg-pink-300 px-4 py-2 rounded-xl">Cancel</button>
          </div>
            
    </div>
    </form>
  <div><TablePage /></div>
  
            </div>
        </div>
      </div>

  <div id="footer" class="p-4 bg-purple-400"></div>
</div>

   
</template>

<script>
import { mapActions } from "vuex";
import TablePage from "./TablePage.vue"



  export default {
    name: "MainPage",
    data() {
        return {
            date: null,
            city: null,
            cityname: null,
            description: null,
            typename: null,
        };
    },
    components: [TablePage],
    methods: {
        ...mapActions({
            setParcel: "Parcel/setParcel",
        }),
        onSubmit() {
            this.setParcel({ date: this.date, city: this.city, cityname: this.cityname, description: this.description, typename: this.typename, });
        }
    },
    components: { TablePage }
};
</script>
