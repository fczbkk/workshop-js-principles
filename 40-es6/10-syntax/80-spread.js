function showFullName (first_name, middle_name, last_name) {
  console.log(first_name, middle_name, last_name);
}

var john = ['Long', 'John', 'Silver'];
showFullName(...john);