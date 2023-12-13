let height = undefined;
let result;

function findUndefined(height) {
  result = height ?? "Height is not defined";
}
findUndefined(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
