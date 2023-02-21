//const createPhoneManually = arr => {
//    return `(${arr[0]}${arr[1]}${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]})`

//}
//console.log(createPhoneManually([1,2,3,4,5,6,7,8,9,0]))


const createPhoneString = arr => {
    let phoneStr = '(xxx) xxx-xxxx'
    arr.forEach(num => phoneStr = phoneStr.replace('x', num))

    return phoneStr
}
console.log(createPhoneString([1,2,3,4,5,6,7,8,9,0]))