var recipes = { breakfast: "omlette" };

function updateObjectWithKeyAndValue(obj, key, value) {
  obj.key = "value";

  return obj;
}

updateObjectWithKeyAndValue(recipies, 'snack', 'trail mix');