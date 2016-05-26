function showFullName (
  {
    first = 'John',
    last = 'Doe',
    middle = 'X.'
  } = {}
) {
  console.log(first, middle, last);
}

showFullName();
showFullName({first: 'Riki', last: 'Fridrich'});
