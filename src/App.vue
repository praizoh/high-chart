<template>
  <v-app>
    <v-content>
      <BarChart/>
    </v-content>
  </v-app>
</template>

<script>
import BarChart from './components/Barchart';

export default {
  name: 'App',

  components: {
    BarChart,
  },

  data(){
    return{

    }
  }
};
</script>
