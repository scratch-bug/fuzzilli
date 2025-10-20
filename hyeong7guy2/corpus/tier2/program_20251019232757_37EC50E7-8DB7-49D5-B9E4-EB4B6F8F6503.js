function f3() {
    return f3;
}
function f4() {
    function f5() {
        const v44 = new Uint8ClampedArray([-393607231,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,536870889,7,7,1,3,101,0,112,1,0,536870887,-4294967295,1,4,-9223372036854775808,65,42,11,0]);
        v44.toSorted();
        return { done: true };
    }
    return { next: f5 };
}
const v48 = Symbol.iterator;
f3.bind(null, ...{ [v48]: f4 });
