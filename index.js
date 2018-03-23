var recipes = { };

function updateObjectWithKeyAndValue(obj, key, value) {
  return Obj.assign({}, obj, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return obj.key = value;
  return obj;
}

updateObjectWithKeyAndValue(recipies, 'snack', 'trail mix');
