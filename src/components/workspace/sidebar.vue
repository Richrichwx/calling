<template>
    <div class="sidebar">
        <button class="sidebar__button sidebar__button_info">данные о контакте</button>
        <div class="sidebar__button sidebar__button_status" @click="show= !show">
            {{status}}
            <transition name="fade">
                <ul v-if="show">
                    <li class="sidebar__button sidebar__button_list"
                        v-for="item in items"
                        :key="item"
                        @click="changeClick(item)">
                        {{item}}
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
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
.sidebar{
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border: 1px solid #000;
}
.sidebar__button{
    width: 300px;
    height: 30px;
    cursor: pointer;
    outline: none;
    border: 1px solid #000;;
    border-radius: 7px;
    font-size: 25px;
    margin-top: 20px;
    text-align: center;
}
.sidebar__button_info{
    width: 300px;
    height: 40px;
    background: steelblue;
    font-size: 20px;
}
.sidebar__button_list{
    list-style: none;
    margin: -6px 0 10px -41px;
}
.sidebar__button_list:hover{
    background: rgba(70, 131, 180, 0.61);
    transition: 0.5s;
}

.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>
