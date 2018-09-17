<template>
    <div>
      <Row class="row">
        <Col span="12">
          <div id="chartColumn" style="width: 100%; height: 400px;"></div>
        </Col>
        <Col span="12">
          <div id="chartBar" style="width: 100%; height: 400px;"></div>
        </Col>
      </Row>

    </div>
</template>

<script>
    export default {
      name: "echarts",
      data(){
          return {

          }
      },
      mounted(){
        this.drawColumn();
        this.drawBar();
      },
      methods:{
        drawColumn(){
          //基于dom初始化echarts实例
          let column= this.$echarts.init(document.getElementById('chartColumn'));
          //绘制
          column.setOption({
            title:{text: 'Column Chart'},
            tooltip: {},
            legend:{
              data:['销量']
            },
            xAxis:{
              data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
            },
            yAxis:{},
            series:[{
              name:'销量',
              type:'bar',
              data:[10,5,35,30,20,10]
            }]
          });

        },

        drawBar(){
          let bar= this.$echarts.init(document.getElementById('chartBar'));
          bar.setOption({
            title:{
              text: 'Bar Chart',
              subtext: '数据来源于网络'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer:{
                type: 'shadow'
              }
            },
            legend:{
              data: ['2011年','2012年']
            },
            grid:{
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01]
            },
            yAxis: {
              type: 'category',
              data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
            },
            series: [
              {
                name: '2011年',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
              },
              {
                name: '2012年',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
              }
            ]
          })
        }
      }
    }
</script>

<style scoped>

</style>
