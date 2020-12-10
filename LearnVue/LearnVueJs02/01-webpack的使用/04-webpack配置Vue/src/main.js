
require('./css/normal.css')
require('./css/special.less')

import Vue from 'vue'

const app = new Vue({
  el: '#app',
  data: {
    message: 'hello Vue'
  }
})
