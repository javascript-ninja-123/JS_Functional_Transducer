const uniqid = require('uniqid');
const timeIt = (label,fn) => {
  console.time(label)
  console.log(fn);
  console.timeEnd(label)
}




const data = [
  {
    id:uniqid(),
    name:'Sungmin Yi',
    age:25,
    job:'javascript developer'
  },
  {
    id:uniqid(),
    name:'Yunhan Zhong',
    age:23,
    job:'airbnb host'
  },
  {
    id:uniqid(),
    name:'Holman ton',
    age:34,
    job:'singer'
  }
];

const idArray = [];


//application logic
const extractId = id => idArray.push(id);
const upper = str => str.toUpperCase()
const stringify = age => age.toString();
const ageLimit = age => age < 30;


//transducer cooking
const compose$ = (...fns) => x =>
fns.reduceRight( (acc,fn) => fn(acc),x)


const map$ = (xf,condition) => reducer => (acc,val) => {
  val[condition] = xf(val[condition])
  acc = reducer(acc,val)
  return acc;
}

const filter$ = (predicate,condition) => reducer => (acc,val) => {
  if(predicate(val[condition])){
    acc = reducer(acc, val)
    return acc;
  }
  return acc;
}

const pushReducer = (acc,val) => {
  acc.push(val)
  return acc;
}

const transduce = (composeLogic,pushReducer,seed) => collection =>
collection.reduce(composeLogic(pushReducer),seed)
/// transducer is fucking grilled...~~~~~


//lets compose an application logic
const userCompose = compose$(
  filter$(ageLimit,'age'),
  map$(upper,'name'),
  map$(stringify,'age'),
  map$(extractId,'id')
)



//lower concept
const l_filter = (predicate,condition) => (acc,val) => {
  if(predicate(val[condition])){
    acc.push(val)
    return acc;
  }else return acc;
}

const l_map = (fx,condition) => (acc,val) => {
  val[condition] = fx(val[condition])
  acc.push(val)
  return acc;
}


const userTransduce = transduce(userCompose,pushReducer,[]);

const result = userTransduce(data)

const regularReduce = data.reduce(l_filter(ageLimit,'age'),[]).reduce(l_map(upper,'name'),[]).reduce(l_map(stringify,'age'),[])


timeIt('trans',result)
timeIt('regular',regularReduce)
console.log(idArray)
