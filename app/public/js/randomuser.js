var waitingApp = new Vue({
  el: '#user',
  data: {
    user: {
      name:"",
      dob:"",
      age:"",
      email:"",
      nat:"",
      picture:""
    }
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => {waitingApp.user = json.results[0]});
    }
  },
  created() {
    this.fetchUser()
  }
});
