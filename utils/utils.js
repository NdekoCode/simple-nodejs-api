export function isEmpty(value) {
  if (typeof value === "string") return isEmptyString(value);
  return isEmptyObject(value);
}
function isEmptyString(value) {
  if (
    value === undefined ||
    value === "" ||
    value === null ||
    value.length < 1
  ) {
    return true;
  }
  return false;
}
// EST-CE QUE LA VALEUR EST VIDE
export function isEmptyObject(value) {
  if (value === undefined || value === null) return true;
  if (value.length === undefined && value.constructor === Object) {
    return Object.keys(value).length < 1;
  }
  return value.length < 1;
}
