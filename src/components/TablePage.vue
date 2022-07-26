<template>
<div class="container flex-none justify-center mx-auto">
    <div class="flex flex-col">
        <div class="w-full">
            <div class="border-b border-gray-200 shadow">
                <table class="divide-y divide-gray-300 ">
                    <thead class="bg-gray-50">
                        <tr>  
                            <th class="px-6 py-2 text-xs text-gray-500">
                                 The city from which the parcel is sent
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                             The city to which the parcel is sent
       
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Type of parcel
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                              Date of dispatch
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                               Description
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                               Date creation
                            </th>
                             <th class="px-6 py-2 text-xs text-gray-500">
                             
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                        <tr v-for="(item, index) in items" :key="item.city" class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                {{ item.city }}
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                   {{ item.cityname }}
                                </div>
                            </td>
                                                        <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                   {{ item.typename }}
                                </div>
                            </td>
                                                        <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                   {{ item.date }}
                                </div>
                            </td>
                                                        <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                   {{ item.description }}
                                </div>
                            </td>
                            <td>
                                
                            </td>
                              <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                              </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                            </td>
                             
                          
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters("Parcel", ["items"])
    },
}
</script>
