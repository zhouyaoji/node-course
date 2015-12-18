var isValid = false;

function toggleBoolean(booleanVar) {
  if (typeof booleanVar === 'boolean') {
    return !booleanVar;
  } else {
      console.log("Warning! Not a boolean.");
  }
}
console.log(toggleBoolean(true));
console.log(toggleBoolean('Joe'));
