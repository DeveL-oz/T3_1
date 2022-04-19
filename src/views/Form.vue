<template>
  <div class="container">
    <div class="h5">Форма подачи заявки в отдел сервиса и качества</div>
    <form class="form" @submit.prevent="submit">
      <div class="form__item branch">
        <div class="branch__title">Ваш филиал *</div>
        <select class="branch__select" v-model="city" :disabled="isOnline">
          <option class="branch__option" disabled value="" selected>Выберите город</option>
          <option :value="city.title" v-for="city in cities" :key="city">{{city.title}}</option>
        </select>
        <input type="checkbox" class="branch__inp" id="checkbox" @change="reset" v-model="isOnline">
        <label for="checkbox">Онлайн</label>
      </div>
      <div class="form__item theme">
        <div class="theme__title">Тема обращения *</div>
        <input class="theme__radio" type="radio" id="one" value="Недоволен" v-model="picked">
        <label for="one">Недоволен качеством услуг</label>
        <br>
        <input class="theme__radio" type="radio" id="two" value="Расторжение" v-model="picked">
        <label for="two">Расторжение договора</label>
        <br>
        <input class="theme__radio" type="radio" id="three" value="Не приходит" v-model="picked">
        <label for="three">Не приходит письмо активации на почту</label>
        <br>
        <input class="theme__radio" type="radio" id="four" value="Не работает" v-model="picked">
        <label for="four">Не работает личный кабинет</label>
        <br>
        <input @input="check" class="theme__input" v-model="other" placeholder="Другое">
      </div>
      <div class="form__item problem">
        <div class="problem__title">Описание проблемы *</div>
        <textarea class="problem__txt" v-model="description" placeholder="Введите текст"></textarea>
      </div>
      <div class="form__item loading">
        <div class="loading__title">Загрузка документов</div>
        <div class="loading__subtitle">
          <div> Приложите, пожалуйста, полноэкранный скриншот.</div>
          <div>Это поможет быстрее решить проблему.</div>
        </div>
        <input class="loading__input" type="file">
      </div>
      <button class="form__btn" type="submit" :disabled="!checkForm">Отправить</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { request } from '../api/server';

export default {
  created() {
    this.$store.dispatch('loadCities');
  },
  data() {
    return {
      isOnline: false,
      city: '',
      picked: '',
      other: '',
      description: '',
    };
  },
  computed: {
    ...mapGetters([
      'cities',
    ]),
    checkForm() {
      return (this.city || this.isOnline) && (this.picked || this.other) && this.description;
    },
  },
  methods: {
    check() {
      if (this.other) this.picked = '';
    },
    reset() {
      this.city = '';
    },
    async submit() {
      const response = await request();
      if (response.success === false) alert('Ошибка отправки заявки');
      else this.$router.push({ name: 'success' });
    },

  },
  watch: {
    picked() {
      this.other = '';
    },
  },

};
</script>
