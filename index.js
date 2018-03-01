// //
// //
// // const timeIt = (label,fn) => {
// //   console.time(label)
// //   fn();
// //   console.timeEnd(label);
// // }
// //
// //
// // const compose = (...fns) => x =>
// // fns.reduce((acc,fn) => fn(acc),x)
// //
// // const createRandonNumber = num => Math.random() * num + 1;
// // const MaxNumber =  num => ceil  => Math.max(createRandonNumber(ceil), num);
// // const generateRandonNumber = MaxNumber(0);
// // const floorNumber = num => Math.floor(num);
// //
// //
// // const randomNumber =
// // compose(
// //   generateRandonNumber,
// //   floorNumber
// // )
// //
// // const arrayOfRandom = randomCeil => length =>
// // Array.from({length}, (value,index) =>
// // randomNumber(randomCeil))
// //
// //
// //  const firstArray = arrayOfRandom(100)(20)
// //
// //
// // const isEven = x => x % 2 === 0;
// // const tripleIt = x => x ** 3 ;
// //
// //
// // const tripleReducer = (acc,val) => {
// //   val = tripleIt(val);
// //   acc.push(val)
// //   return acc
// // }
// //
// // const evenReducer = (acc,val) => {
// //   if(isEven(val)){
// //     acc.push(val)
// //     return acc;
// //   }
// //   else return acc;
// // }
// //
// //
// //
// // const newArray =  firstArray
// //   .reduce(tripleReducer,[])
// //   .reduce(evenReducer,[])
// //
// //
// // timeIt('reduce',() => newArray)
// //
// //
// //
// // const objectReducer = (acc,obj) => (
// //   {
// //     ...acc,
// //     ...obj
// //   })
// //
// //
// // const user = {
// //   name:'Sungmin Yi',
// //   'email':'ssuyi@ucdavis.edu'
// // }
// //
// // const userObjReducer = objectReducer(user, {nickname:'hey'})
// //
// // console.log(userObjReducer)
// //
// //
// // const setReducer = (acc,val) => acc.add(val);
// // const uniqueArray = new Set([1,2,3,4,5,6]);
// //
// // const newSet = setReducer(uniqueArray,10)
// //
// // console.log(newSet)
// //
// //
// //
// // const objectPushReducer = (acc,val) => ({
// //   ...acc,
// //   ...val
// // })
// //
// //
// // const newObject = objectPushReducer({name:'yes',age:32},{'nickname':'yes'})
// //
// // console.log(newObject)
// //
// //
// // const doubleTheNumber = number => number * 2;
// //
// //
// // const fromArray = Array.from({length:5}, (v,i) => i)
// // const evenOnly = x => x % 2 === 0;
// //
// // const mapReducer = (xf,array) => {
// //   return array.reduce((acc,val) => {
// //     acc.push(xf(val))
// //     return acc;
// //   },[])
// // }
// //
// // const filterReducer = (predicate,array) => {
// //   return array.reduce((acc,val) => {
// //     if(predicate(val)) {
// //       acc.push(val)
// //       return acc;
// //     }
// //     else return acc;
// //   },[])
// // }
// //
// // const mReducer = (xf) => {
// //   return (acc,val) => {
// //     acc.push(xf(val))
// //     return acc;
// //   }
// // }
// //
// // const fReducer = (predicate) => {
// //   return (acc,val) => {
// //     if(predicate(val)){
// //       acc.push(val)
// //       return acc;
// //     }
// //     else return acc;
// //   }
// // }
// //
// // const mAndFReudcer = xf => predicate => {
// //   return (acc,val) => {
// //     val = xf(val);
// //     if(predicate(val)){
// //       acc.push(val);
// //       return acc;
// //     }else return acc;
// //   }
// // }
// //
// // const filterWrapper = predicate => reducer => {
// //   return (acc,val) => {
// //     if(predicate(val)){
// //       return reducer(acc,val)
// //     }
// //     else return acc;
// //   }
// // }
// //
// // const isEvenFilter = filterWrapper(evenOnly)
// // const isNot2Filter = filterWrapper(val => val !== 2)
// // const doubleMap = mReducer(doubleTheNumber)
// //
// //
// // console.log(fromArray.reduce(isEvenFilter(doubleMap),[]))
// // const pushReducer = (acc,val) => {
// //   acc.push(val)
// //   return acc;
// // }
// //
// //
// //
// //
// // // const doubleNumAndEven = compose(
// // // isNot2Filter,
// // // doubleMap,
// // // isEvenFilter
// // // )(pushReducer)
// // //
// // //
// // // console.log(fromArray.reduce(doubleNumAndEven,[]));
// //
// //
// //
// //
// //
// // // const man = fromArray
// // // .reduce(mAndFReudcer(doubleTheNumber)(evenOnly),[])
// // //
// // //
// // //
// // // const doubledArray = mapReducer(doubleTheNumber,fromArray);
// // // const filterArray = filterReducer(evenOnly,doubledArray);
// // //
// // //
// // //
// // // console.log(filterArray)
// // // console.log(man)
// //
// //
// //
// //
// // //////
// // console.log('yes')
// //
// // const filter$ = predicate => (acc,val) => {
// //   if(predicate(val)){
// //     acc.push(val)
// //     return acc;
// //   }
// //   return acc
// // }
// //
// // const map$ = fx => (acc,val) => {
// //   acc.push(fx(val))
// //   return acc;
// // }
// //
// //
// //
// //
// //
// //
// //
// // const filterWrapper$ = predicate => reducer => (acc,val) => {
// //   if(predicate(val)){
// //     return reducer(acc,val)
// //   }
// //   return acc;
// // }
// // const doubleMap2 = map$(val => val * 2)
// //
// //
// //
// // const newMan2 = [1,2,3,4,5].reduce(filterWrapper$(val  => val > 3)(doubleMap2),[])
// // console.log(newMan2)
// //
// //
// // console.log('end')
// //
// //
// //
// //
// //
// //
// //
// //
// //
//
// const array1 = [1,2,3,4,5];
// const notEven = x => x % 2 !== 0;
// const addUpTwo = x => x * 2;
// const isNot2 = x => x !== 2;
//
// const filter = predicate => reducer => (acc,val) => {
//   if(predicate(val)){
//     return reducer(acc,val)
//   }
//   return acc;
// };
//
//
// const map = fx => reducer => (acc,val) => {
//   reducer(acc,fx(val))
//   return acc;
// }
//
//
// const result1 = array1.reduce(filter(notEven)(map(addUpTwo)),[])
//
//
// const isEvenFilter = filter(notEven)
// const isNot2Filter = filter(isNot2)
// const doubleMap = map(addUpTwo)
//
//
// const pushReducer = (acc,val) => {
//   acc.push(val)
//   return acc;
// }
//
//
// const result = array1.reduce(isNot2Filter(isEvenFilter(doubleMap(pushReducer))),[]);
//
//
//
//
//
// //thi is a basic from
// const filter2 = predicate => reducer => (acc,val) => {
//   if(predicate(val)){
//     acc = reducer(acc,val)
//     return acc;
//   }
//   return acc;
// }
//
// const map2 = fx => reducer => (acc,val) => {
//   acc = reducer(acc, fx(val))
//   return acc;
// }
//
// const pushReducer2 = (acc,val) => {
//   acc.push(val)
//   return acc;
// }
//
//
// const filterEven33 = filter2(x => x % 2 !== 0)
// const multiply = map2(x => x  * 3)
// console.log('start')
// console.log([1,2,3,4,5,6,7,8].reduce(filterEven33(multiply(pushReducer2)),[]));
//
// compose = (...fns) => x =>
// fns.reduceRight((acc,fn) =>fn(acc), x )
//
//
// const FilterAndMultiplyReducer = compose(
//   filterEven33,
//   multiply
// )(pushReducer);
//
//
// const ex = [1,2,3,4,5,6,7,8].reduce(FilterAndMultiplyReducer,[])
//
// console.log(ex)
//
//
//
//
