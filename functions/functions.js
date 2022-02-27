// 1
function helloworld(argument)
{
    return function(arguement2)
    {
        return argument+ " " + arguement2;
    };
};
let welcome=helloworld("hello");
console.log(welcome("world"));
// 2
let tab = [9, 1, 22, 0, 2];
let sum = tab.reduce(function(previous,current)
{
    return previous+current;
},0);
console.log(sum);
//3
let tab = [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5];
let flattentab;
function recursiveflat(curr)
{
    if(typeof curr == "object")
    {
        return curr = curr.reduce((previous,current) => {
            return previous.concat(recursiveflat(current));
        },[]);
    }
    return curr;
}
flattentab = recursiveflat(tab);
console.log(flattentab);
//4
let tab1 = ['b', 3, 4, 76, 'c'];
let tab2 = ['a', 'b', 4, 76, 21, 'e'];
function check(elem)
{
    return tab2.find(element => element === elem);
}
let output = tab1.filter((element) => {
    return check(element);
},[]);
console.log(output);
//5
let tab1 = ['b', 3, 4, 76, 'c'];
let tab2 = ['a', 'b', 4, 76, 21, 'e'];
function check(elem,tab)
{
    return tab.find(element => element === elem);
}
let output = tab1.filter(element => {
    return !check(element,tab2);
},[])
output = tab2.filter(element => {
    return !check(element,tab1);
},[])
console.log(output);
//6
let tab1=[1,2,3];
let tab2=[4,5,6,7];
let output = tab1.map((element,i) => {
    element.push(tab2[i]);
})
console.log(output);
//7
let tab1=['a', 'b', 'c', 'd'];
let tab2={ a: { b: { c: { d: '23' } } } };
let currentobj = tab2;
tab1.forEach(element =>{
    if(!currentobj[element]) 
    {
        console.log("doesnt exist");
    }
    currentobj = currentobj[element];
})
console.log(currentobj);
//8
let tab1={ a: 'b', c: 'd' };
let tab2={ c: 'd', a: 'b' };
let keys1 = Object.keys(tab1);
let keys2 = Object.keys(tab2);
let values1 = Object.values(tab1);
let values2 = Object.values(tab1);
let lenkeys,lenval;
lenkeys = keys1.length;
lenval = values1.length;
keys1 = keys1.filter(element => {
    return keys2.find(elem => elem == element);
})
let iskeysok = lenkeys == keys1.length && lenkeys == keys2.length;
values1 = values1.filter(element => {
    return values2.find(elem => elem == element);
})
let isvalok = lenval == values1.length && lenval == values2.length;
console.log(iskeysok && isvalok);
//9
let tab1=['color', 'size'];
let tab2={ color: 'Blue', id: '22', size: 'xl' };
tab1.forEach(element => {
    delete tab2[element];
})
console.log(tab2);