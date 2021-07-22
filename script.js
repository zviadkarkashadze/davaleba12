//n1
let numbers = [5,25,89,120,36];
 
numbers.push('Javascript', 'Python');
console.log(numbers);

numbers.unshift ('html', 'css');
console.log(numbers);

console.log(numbers.length);

numbers.shift ();
numbers.pop ();
console.log(numbers);


//n2
let food = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

console.log(food.length);

food.push ('ვაშლი', 'ანანასი');
console.log(food);

food.unshift ('საზამთრო');
console.log(food);

console.log(food.length);

food.splice (2,0,'მანგო');
console.log(food);

food.shift ();
food.pop ();
console.log(food);
console.log(food.length);



//n3
let user = {
  name: 'zviadi',
  age: 28,
  gender: 'male',
  email: 'zkarkashadze@yahoo.com',
  phone: 555556677
};

for(let item of Object.keys(user)) {
  console.log(item)
}


//n4
let users = {
  name: 'nino',
  age: 24,
  gender: 'female',
  email: 'ninot@gmail.com',
  phone: 557122335
};

for(let item of Object.values(users)) {
  console.log(item)
}


//n5
let array = [12, 25, 3, 6, 8, 14, 7, 23];

let result = array.map(function(x) {
  return x / 3;
})
console.log(result);


//n6
let array1 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let result1 = array1.filter(function(item) {
    return typeof item === 'number'
});
console.log(result1);