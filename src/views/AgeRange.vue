<template>
    <div>
        <v-toolbar>
            <v-spacer></v-spacer>
            <v-btn to='/'>Bloodgroup chart</v-btn>
        </v-toolbar>
        <v-container>
        
            <AgeRange />

        </v-container>
    </div>
        
</template>

<script>
import AgeRange from '../components/AgeRangeChart'; 
// import firebase from "../firebase";
// const db = firebase.firestore(); 
export default {
    name: 'AgeRange',

    components: {
    AgeRange,
    },

    data(){
        return{
            // count for A, B, AB, O
            count:[],
            load:true,
            
        }
    },
    methods:{
        
    },
    mounted(){
        
    }
};
</script>
