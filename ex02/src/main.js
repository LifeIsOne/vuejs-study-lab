import App from './App.js'
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.js'
import AppMain from './components/AppMain.js'
import BoardComponent from './components/BoardComponent.js'

const app = Vue.createApp(App);
app.component("AppHeader", AppHeader);
app.component("AppNav", AppNav);
app.component("AppMain", AppMain);
app.component("BoardComponent", BoardComponent);
app.mount("#app");