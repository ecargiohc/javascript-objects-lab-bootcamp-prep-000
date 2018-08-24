var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign ({}, {key: value})
  return Object.assign({prop: 1}, {prop2: 2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object[key]=value
  return Object
}