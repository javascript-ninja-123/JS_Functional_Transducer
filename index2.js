const log = fn => console.log(fn)


const reducer = (acc,val) => {
  acc.push(val)
  return acc
}

const filter = predicate => (acc,val) => {
  if(predicate){
    acc.push(val)
    return acc
  }
  return acc;
}

const map = fx => (acc,val) => {
  acc.push(fx(val))
  return acc;
}


log(
  [1,2,3,4,5].reduce(filter(value => value > 2),[])
)

log(
  [1,2,3,4,5].reduce(map(value => value + 2),[])
)


///
const filter2 = predicate => reducer => (acc,val) => {
  if(predicate(val)){
     acc = reducer(acc,val)
     return acc;
  }
  return acc;
}

const map$ = fx => reducer => (acc,val) => {
  acc = reducer(acc,fx(val))
  return acc;
}

const filterEven = filter2(x => x % 2 !== 0)
const addExclmationMark = map$(x => `${x}!`)
const addMap = map$(x => x + 2);

const pushReducer = (acc,val) => {
  acc.push(val)
  return acc;
}

const compose$ = (...fns) => x =>
fns.reduceRight( (acc,fn)  =>fn(acc), x)


const composedlogic = compose$()(
  filterEven,
  addMap,
)





const transduce = (xf,reducer,seed,collection) =>
collection.reduce(xf(reducer),seed)


const transduce2 = (composeLogic, pushReducer, seed, array) =>
array.reduce(composeLogic(pushReducer),seed)



const secondTransduce = transduce2(
  composedlogic,
  pushReducer,
  [],
  [1,2,3,4,5,6,7]
)

console.log(secondTransduce)

const superReudcer = (trans) => (acc,val)  => {
  acc = tran(acc,val);
  return acc
}


const transduce3 = (composeLogic,pushReducer,seed,collection) => {
  const transformReducer = composeLogic(pushReducer);
  if(Array.isArray(collection)){
    return collection.reduce(superReudcer(transformReducer),seed)
  }
  else{
    return [collection].reduce(superReudcer(transformReducer),seed).join('')
  }
}





const scream = str => `${str}!`;

const word = transduce3(
  compose$(
    map$(scream)
  ),
  pushReducer,
  [],
  12345
)

console.log(word)
