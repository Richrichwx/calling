<template>
  <div class="left_cont_item">
    <button class="cont_info">данные о контакте</button>
    <div class="status" @click="show= !show">{{status}}
      <transition name="stat">
      <ul id="status_list" v-if="show">
        <li v-for="item in items" :key="item" @click="changeClick(item)">
          {{item}}
        </li>
      </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['в сети', 'занят', 'отсутсвую', 'в самолете', 'в пути'],
      show: false,
      status: 'статус'
    }
  },
  methods: {
    changeClick: function (item) {
      this.status = item
    }
  }
}
</script>

<style scoped>
.left_cont_item{
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border: 1px solid #000;
}
button{
  outline: none;
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid #000;
}
.cont_info{
  width: 300px;
  height: 40px;
  margin: 20px auto;
  background: steelblue;
  font-size: 20px;
}
.status{
  width: 300px;
  height: 30px;
  background: #fff;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 7px;
  cursor: pointer;
  text-align: center;
  font-size: 25px;
}
#status_list{
  margin-top: 15px;
}
li{
  width: 300px;
  height: 30px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 7px;
  list-style: none;
  margin: auto -40px;
  margin-bottom: 5px;
}
li:hover{
  background: rgba(70, 131, 180, 0.61);
  transition: 0.5s;
}
.stat-enter-active, .fade-leave-active{
  transition: opacity 2s;
}
.stat-enter, .fade-leave-to{
  opacity: 0;
}
</style>
