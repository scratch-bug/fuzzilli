const v0 = [9,1024,4294967295,-776326798,-4,-9007199254740992,268435440,268435440];
function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        Object.seal(v0);
        for (const v7 in v0) {
        }
        return { done: true };
    }
    return { next: f4 };
}
const v11 = Symbol.iterator;
f2.bind(null, ...{ [v11]: f3 });
