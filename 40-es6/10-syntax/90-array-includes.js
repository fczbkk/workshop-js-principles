function checkForValueInArray (haystack, needle) {
  console.log(
    '\nLooking for ', needle, ' in ', haystack,
    '\nindexOf: ', haystack.indexOf(needle) > -1,
    '\nincludes: ', haystack.includes(needle)
  );
}

checkForValueInArray(
  ['aaa', 'bbb', 'ccc'],
  'aaa'
);

checkForValueInArray(
  [,,,],
  undefined
);

checkForValueInArray(
  [1, 2, NaN],
  NaN
);