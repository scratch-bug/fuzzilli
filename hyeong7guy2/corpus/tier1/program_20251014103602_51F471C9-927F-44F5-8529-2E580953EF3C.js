const v1 = new Int16Array(Int16Array, Int16Array);
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a4.g = v1;
}
const v6 = new F2(v1);
for (let i8 = 0;
    (() => {
        v1.g = v1;
        %PretenureAllocationSite(v6);
        return i8 < 20000;
    })();
    i8++) {
    const v14 = /(fp*)/iv;
    for (const v15 in v14) {
        v14[v15];
        const v17 = v14.test();
        function f18() {
            return v17;
        }
    }
}
function f19(a20) {
    return Int16Array;
}
class C21 extends f19 {
}
