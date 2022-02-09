import "./styles.css";

function diamondStr(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 0; j < n - i; j++) {
      result += " ";
    }
    for (let m = 0; m < i; m++) {
      result += "* ";
    }
    console.log(result);
  }
  for (let i = 1; i <= n - 1; i++) {
    let value = "";
    for (let j = 0; j < i; j++) {
      value += " ";
    }
    for (let k = 0; k < n - i; k++) {
      value += "* ";
    }
    console.log(value);
  }
}
diamondStr(10);
