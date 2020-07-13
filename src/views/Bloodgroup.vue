<template>
    <div>
        <v-toolbar>
            <v-spacer></v-spacer>
            <v-btn to='/agerange'>Age range chart</v-btn>
        </v-toolbar>
        <v-container>
        
            <BarChart :data="count" v-if="load===true" />

        </v-container>
    </div>
        
</template>

<script>
import BarChart from '../components/BarChart'; 
import firebase from "../firebase";
const db = firebase.firestore();
export default {
    name: 'Bloodgroup',

    components: {
    BarChart,
    },

    data(){
        return{
            // count for A, B, AB, O
            count:[],
            load:false,
            
        }
    },
    methods:{
        readUsers() {
            // check if user is online
            const status = navigator.onLine
            if(!status){
                let usersData = [];
                usersData = JSON.parse(localStorage.getItem("usersData"))
                console.log('offline getting')
                // Get count 
                if(!usersData){
                    alert('You are offline')
                }else{
                    const a = usersData.filter(item => item.bloodGroup === 'A').length;
                    const b = usersData.filter(item => item.bloodGroup === 'B').length;
                    const ab = usersData.filter(item => item.bloodGroup === 'AB').length;
                    const o = usersData.filter(item => item.bloodGroup === 'O').length;
                    this.count[0]=a
                    this.count[1]=b
                    this.count[2]=ab
                    this.count[3]=o
                    this.load=true
                    return usersData
                }
                
            }else{
                let usersData = [];
                console.log('online=================')
                db.collection("users")
                .get()
                .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                usersData.push({
                    id: doc.id,
                    name: doc.data().name,
                    bloodGroup: doc.data().blood_group,
                    });
                });
                    localStorage.setItem("usersData", JSON.stringify(usersData))
                    console.log(usersData)
                    const a = usersData.filter(item => item.bloodGroup === 'A').length;
                    const b = usersData.filter(item => item.bloodGroup === 'B').length;
                    const ab = usersData.filter(item => item.bloodGroup === 'AB').length;
                    const o = usersData.filter(item => item.bloodGroup === 'O').length;
                    this.count[0]=a
                    this.count[1]=b
                    this.count[2]=ab
                    this.count[3]=o
                    this.load=true
                    return usersData
                })
                .catch((error) => {
                console.log("Error getting documents: ", error);
                });
            }
            
            
            
            
        }
    },
    mounted(){
        this.readUsers()
    }
};
</script>
