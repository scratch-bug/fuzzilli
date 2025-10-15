const v5 = [Uint8Array,6,6,{},268435440n];
function f7() {
    return 268435440n;
}
function f8() {
    function f9() {
        v5.includes(9007199254740992n);
        return { done: true };
    }
    return { next: f9 };
}
const v14 = Symbol.iterator;
f7.bind(null, ...{ [v14]: f8 });
