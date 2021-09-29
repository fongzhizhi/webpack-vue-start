import Vue  from 'vue/dist/vue.common.dev'
import App from './App.vue'

const app = document.createElement('div');
app.id = 'app';
app.innerHTML = '<App>{{ msg }}</App>'
document.body.append(app)

new Vue({
    el: '#app',
    data: {
        msg: 'THis is a message'
    },
    components: {
        app: App
    }
})
