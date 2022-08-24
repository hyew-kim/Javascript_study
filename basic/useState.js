//useState with closure function

/*const customUseState = (initialVal) => {
  let innerState = initialVal;
  const state = () => innerState;
  const setState = (newVal) => {
    innerState = newVal;
  };

  return [state, setState];
};

//const useState = customUseState(1);
//console.log(useState[0]());
//useState[1](2);
//console.log(useState[0]());
//state과 setState를 사용하는 시점은 customUseState의 호출이 끝난 후이지만,
//클로저가 innerState값을 기억하고 있기 때문에 그 이후에도 접근할 수 있는 것입니다.

const customUseState = (initialVal) => {
  let innerState = initialVal;
  const state = innerState; // 이렇게 변수로 하면 customUseState가 return 하면 더이상 innerState에 변경 x
  const setState = (newVal) => {
    innerState = newVal;
  };

  return [state, setState];
};

//const useState = customUseState(1);
//console.log(useState[0]);
//useState[1](2);
//console.log(useState[0]);
*/
let state = [];
let setters = [];
let cursor = 0; // 현재 state값 위치
let flag = true;

const createSetter = (cursor) => {
  return (newValue) => {
    console.log("new", newValue);
    state[cursor] = newValue;
  };
};

const customUseState = (initialVal) => {
  if (flag) {
    state.push(initialVal);
    setters.push(createSetter(cursor));
    flag = false;
  }
  const resState = state[cursor];
  const resSetter = setters[cursor];
  cursor++;
  return [resState, resSetter];
};

cursor = 0;
const [counter, setCounter] = customUseState(0);
console.log(counter);
setCounter(1);
console.log(counter);
