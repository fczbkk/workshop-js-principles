class Person
  greeting: 'Hello'
  constructor: (@name) ->
  greet: -> console.log @greeting + ' ' + @name

class Pirate extends Person
  greeting: 'Yarrr!'


me = new Person 'Riki'
me.greet()

john = new Pirate 'John Long Silver'
john.greet()