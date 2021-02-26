// Write your solution in this file
//set variable to an empty object 
// let driver = {}

// function updateDriverWithKeyAndValue(driver, key, value)
// pass in argument of and object,key, and value
// in this case the object is saved to the variable driver 
// {
// make new varible and set the value to a copy of the original object
    // let newDriver = {...driver}
// new varible set key = value
//     newDriver[key] = value 

//     return newDriver 
// }

// function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
// {
//     driver[key] = value 
//     return driver
// }

// function deleteFromDriverByKey(driver, key)
// {
//     let newDriver = Object.assign({}, driver)
    
//     delete newDriver[key]

//     return newDriver
// }

// function destructivelyDeleteFromDriverByKey(driver, key)
// {
//     delete driver[key]

//     return driver 
// }

// const driver = {}

// function updateDriverWithKeyAndValue(obj, key, value){
//     let newDriver = {...obj}
//     newDriver[key] = value
//     return newDriver
// }

// function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
//     obj[key] = value 
//     return obj
// }

// function deleteFromDriverByKey(obj, key){
//     let newDriver = Object.assign({}, obj)
//     delete newDriver[key] 
//     return newDriver
// }

// function destructivelyDeleteFromDriverByKey(obj, key){
//     delete obj[key]
//     return obj
// }















// let driver = {}

// function updateDriverWithKeyAndValue(obj, key, value){
//     let newDriver = {...obj}
//     newDriver[key] = value
//     return newDriver
// }

// function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
//     obj[key] = value
//     return obj
// }

// function deleteFromDriverByKey(obj, key){
//     let newDriver = {...obj}
//     delete newDriver[key]
//     return newDriver
// }

//  function destructivelyDeleteFromDriverByKey(obj, key){
//     delete obj[key]
//     return obj
// }





// let driver = {}


// function updateDriverWithKeyAndValue(obj,key,value){
//     let newDriver = Object.assign({}, obj)
//     newDriver[key] = value
//     return newDriver 
// }

// function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
//     obj[key] = value
//     return obj
// }

// function deleteFromDriverByKey(obj, key){
//    let newDriver = {...obj}
//    delete newDriver[key]
//    return newDriver
// }

// function destructivelyDeleteFromDriverByKey(obj, key){
//     delete obj[key]
//     return obj
// }



let driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
    let newDriver = Object.assign({}, obj)
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
    obj[key] = value 
    return obj
}

function deleteFromDriverByKey(obj, key){
    let newDriver = Object.assign({},obj)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(obj,key){
    delete obj[key]
    return obj
}