///the basic behavior
//[1,2,3,4,5,6,7]
const uniqid = require('uniqid');
const reducer = (acc,val) => {
  acc.push(val)
  return acc;
};




//compose
const compose$ = (...fns) => x =>
fns.reduceRight( (acc,fn) => fn(acc),x)


///map
const map$ = (fx,condition)  => reducer => (acc,val) => {
   acc = reducer(acc,fx(val))
   return acc;
}


//fitlter
const filter$ = (predicate)  => reducer => (acc,val) => {
  if(predicate(val)){
    acc = reducer(acc,val)
    return acc;
  }else return acc;
}


const upIt = value => {
  value.name = `${value.name}!`
  return value;
};

const ageLimt = value => {
  if(value.age <30){
    return value;
  }
}

const upperCaseAddress = value => {
  value.address.street = value.address.street.toUpperCase();
  return value;
}


const data = [
  {
    id:uniqid(),
    name:'Sungmin Yi',
    age:25,
    job:'javascript developer',
    address:{
      street:'yes'
    }
  },
  {
    id:uniqid(),
    name:'Yunhan Zhong',
    age:23,
    job:'airbnb host',
    address:{
      street:'yes'
    }
  },
  {
    id:uniqid(),
    name:'Holman ton',
    age:34,
    job:'singer',
    address:{
      street:'yes'
    }
  }
];

const man = data.reduce(map$(upperCaseAddress)(reducer),[])


console.log(man)
