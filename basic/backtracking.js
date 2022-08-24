let n, m; //n: 수의 범위, m: 칸의 수
let arr = Array(10).fill(0);
let isused = Array(10).fill(0);

//k: 채워진 자릿수
const func = (k) => {
  if (k == m) {
    let tmp = "";
    for (let i = 0; i < m; i++) tmp += String(arr[i]);
    console.log(tmp);
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!isused[i]) {
      if (k == 0 || arr[k - 1] < i) {
        arr[k] = i;
        isused[i] = 1;
        func(k + 1);
        isused[i] = 0;
        //cout << i << ' ' << "\n";
      }
    }
  }
};

function main() {
  (n = 4), (m = 2);
  func(0);
}
main();
