var person = {
  name: 'John Long Silver',
  activities: [
    'sails high seas',
    'loots treasures',
    'feeds sharks'
  ],
  showActivities: function () {
    this.activities.forEach(function (activity) {
      console.log(this.name + ' ' + activity + '.');
    });
  }
};

/*
  showActivities() {
    this.activities.forEach(
      activity => console.log(this.name + ' ' + activity + '.')
    );
  }
*/


person.showActivities();