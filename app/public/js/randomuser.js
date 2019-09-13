var waitingApp = new Vue({
  el: '#user',
  data: {
    user: {}
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => {waitingApp.user = json.results[0]});

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchUser()
  }
});
