//Task : 1
const obj = {
  name: "masum",
  age: 30,
  friends: {
    name: ["lingkon", "maksud", "mim"],
    age: {
      lingkon: 32,
      maksud: 31,
      mim: 26,
    },
  },
  activities: function () {
    return `${this.name} is doing code`;
  },
  isMarrid: true,
};

//Task : 2
const mimAge = `${obj.friends.name[2]} is a good girl she is ${obj.friends.age.mim}`;

//Task: 3.1
const return89 = () => 89;

//Task: 3.2

const onePara = (num) => parseFloat((num / 17).toFixed(2));

//Task: 3.3

const twoPara = (a, b) => (a + b) / 2;

//Task: 3.4

const multiLine = (a, b) => {
  const addFrist = a + 7;
  const addSecond = b + 7;
  const sum = addFrist + addSecond;
  return sum;
};

//Task: 4
const arr = [2,25,14,23,65,21,5]

const mapedArray = arr.map(num => parseFloat((num / 7).toFixed(2)))


//Task: 6

const {name, ...rest} = obj;


console.log(name);
