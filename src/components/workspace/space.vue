<template>
    <div class="chatSpace">
        <ul class="chatSpace__button_item">
           <li class="chatSpace__button chatSpace__button_question" v-for="(item, index) in questions"
               :key="item.id"
               :class="{showList: questions.length > 1 && index !== questions.length - 1}">
               {{ index +1 }} > {{ item.title }}
               <br>
               <button class="chatSpace__button chatSpace__button_answer" v-for="quest in item.answer" :key="quest.id" @click="change(quest)">
                   {{ quest.title }}
               </button>
           </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'space',
  data () {
    return {
      questions: [{
        title: 'Здравствуйте!У вас есть контактное лицо?',
        answer: [{
          title: 'Нет контактного лица',
          question: {
            title: 'Добавить контактное лицо?',
            answer: [{
              title: 'Да',
              question: {
                title: 'Назовите номер контакта',
                answer: [{
                  title: 'Я не помню'
                }, {
                  title: '892334343'
                }, {
                  title: 'В следующий раз'
                }
                ]
              }
            },
            {
              title: 'Нет'
            }, {
              title: 'Не знаю'
            }]
          }
        }, {
          title: 'Есть контактное лицо',
          question: {
            title: 'Укажите контактты',
            answer: [{
              title: 'Их пока нет'
            }, {
              title: 'Я их уже дал',
              question: {
                title: 'Назовите номер контакта',
                answer: [{
                  title: 'Я не помню'
                }, {
                  title: '892334343'
                }, {
                  title: 'В следующий раз'
                }]
              }
            }, {
              title: 'Не помню'
            }]
          }
        }]
      }]
    }
  },
  methods: {
    change: function (item) {
      let index = 0
      this.questions.map(question => {
        if (question.title === item.question) {
          index++
        }
      })
      if (index <= 0) {
        this.questions = [...this.questions, item.question]
      }
    }
  }
}
</script>

<style scoped>
.chatSpace{
    height: 500px;
    width: 950px;
    border: 1px solid #000;
    display: flex;
    margin-top: 10px;
    margin-left: 20px;
    overflow: scroll;
    overflow-x:hidden;
}
.chatSpace__button{
    width: 800px;
    height: 30px;
    cursor: pointer;
    outline: none;
    list-style: none;
    border-radius: 7px;
    font-size: 20px;
    margin-top: 20px;
}
.chatSpace__button_answer{
    width: 200px;
    margin-left: 30px;
    font-size: 16px;
    background: #fff;
    border: 1px solid #bfbfbf;
}
.chatSpace__button_answer:hover{
    background: rgba(70, 131, 180, 0.61);
    transition: 0.5s;
}
.showList{
    opacity: 0.4;
    overflow: hidden;
}
</style>
