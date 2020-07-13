<template>
    <v-container>
        <BarChart/>
    </v-container>    
</template>

<script>
import BarChart from './components/Barchart';

export default {
  name: 'Bloodgroup',

  components: {
    BarChart,
  },

  data(){
    return{

    }
  }
};
</script>
