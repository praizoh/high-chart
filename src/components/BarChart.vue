<template>
  <section class="charts">
        <h3>Bar Chart</h3>
        <vue-highcharts :options="options" ref="barChart"></vue-highcharts>
    </section>
</template>
<script>
import VueHighcharts from "vue2-highcharts";
import Highcharts from "highcharts";

const data = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Number of patients by bloodgroup"
  },
  subtitle: {
    text:
      'Source: <a href="https://high-chart-proj.firebaseio.com">Firebase Sample Data</a>'
  },
  xAxis: {
    categories: ["A", "B", "AB", "0"],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Number of patients",
      align: "high"
    },
    labels: {
      overflow: "justify"
    }
  },
  tooltip: {
    valueSuffix: " people"
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || "#FFFFFF",
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Blood Group",
      data: []
    },
    
  ]
};
export default {
  components: {
    VueHighcharts
  },
  props: ["data"],
  data() {
    return {
      options: data
    }; 
  },
    created(){
      
      data.series[0].data = this.data 
    }
};
</script>
