function f2() {
    return f2;
}
function f3() {
    function f4() {
        const v43 = new Uint8ClampedArray([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,0,112,0,0,10,6,1,4,0,65,42,11]);
        v43.toSorted();
        return { done: true };
    }
    return { next: f4 };
}
const v47 = Symbol.iterator;
f2.bind(null, ...{ [v47]: f3 });
