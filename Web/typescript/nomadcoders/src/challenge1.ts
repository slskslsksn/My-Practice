// 1. last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
type Last = <T>(arr: T[]) => T;
const last:Last = (arr) => arr[arr.length-1];
console.log('last:', last([1,2,3,4]));

// 2.prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
type Prepend = <T>(arr:T[], item:T) => T[];
const prepend:Prepend = (arr, item) => [item, ...arr];
console.log('prepend:', prepend([1,2,3,4], 5));

// 3.mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
type Mix = {<T, M>(a:T[], b:M[]): Array<T|M>}
const mix: Mix = (a, b) => {
    const mixedArr = [];
    const maxSize = Math.max(a.length, b.length);
    for(let i=0; i<maxSize; i++){
        if(i < a.length) mixedArr.push(a[i]);
        if(i < b.length) mixedArr.push(b[i]);
    }
    return mixedArr;
}
console.log('mix:', mix([1,2,3],[false,true,true,true]))

// 4.count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
type Count = <T>(arr: Array<T>) => number;
const count:Count = arr => arr.length;
console.log(`count ${count(['slskslsksn',true, 1323, 'abcd'])}`)


// 5.findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후
//                          존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
type FindIndex = <T>(arr:Array<T>, item: T) => number | null;
const findIndex:FindIndex = (arr, item) => {
    let idx = arr.findIndex(v => v===item);
    return idx > -1 ? idx : null;
}
console.log('findIndex(1):', findIndex([1,2,3,4,5], 0));
console.log('findIndex(2):', findIndex([1,2,3,4,5], 5));

// 6.slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex,세번째 매개변수 숫자 endIndex를 받습니다.
//                                     첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다.
//                                     이때 세번째 매개변수는 필수 매개변수가 아닙니다.
type Slice = <T>(arr: Array<T>, startIndex: number, endIndex?: number) => Array<T>
const slice:Slice = (arr, startIndex, endIndex) => {
    return arr.slice(startIndex, endIndex);
}
console.log('slice(1):', slice([1,2,3,4,5], 3));
console.log('slice(2):', slice([1,2,3,4,5], 1, 4));
