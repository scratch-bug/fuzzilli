function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
const v4 = Symbol.iterator;
const v6 = {
    [v4]() {
    },
};
function f7() {
    return Symbol;
}
Object.defineProperty({}, Symbol.iterator, { writable: true, enumerable: true, value: f7 });
