// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBXk1_11c_C8GeptQZM41TPa4NTKhd2zlI',
  authDomain: 'vue-firebase-auth-test-37f3e.firebaseapp.com',
  databaseURL: 'https://vue-firebase-auth-test-37f3e.firebaseio.com',
  projectId: 'vue-firebase-auth-test-37f3e',
  storageBucket: 'vue-firebase-auth-test-37f3e.appspot.com',
  messagingSenderId: '872465537496',
  appId: '1:872465537496:web:5d68599f9b388b33'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
