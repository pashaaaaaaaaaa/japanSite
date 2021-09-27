let firstName = [
    'Джордж ',
    'Джеймс ',
    'Майкл ',
    'Брюс '
]
let lastName = [
    'Вашингтонг',
    'Стетхам',
    'Джордан',
    'Ли'
]

firstName.forEach((element, index)  => {
    console.log(element, index)
    
});
lastName.forEach((element, index)  => {
    console.log(element, index)
    
});
let newArr = [];


    for(let i=0; i < firstName.length; i++){
        newArr.push(firstName[i]  +  lastName[i])
    }
console.log(newArr)
// forEach(firstName,(element,index)=>{
//     console.log('моя функция',element, index)
// })