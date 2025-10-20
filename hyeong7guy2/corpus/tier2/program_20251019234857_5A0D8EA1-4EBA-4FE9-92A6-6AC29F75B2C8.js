function f1(a2) {
    return Object;
}
Object.defineProperty(Object, 6, { configurable: true, enumerable: true, set: f1 });
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        Object.preventExtensions(Object).seal(Object);
    }
    new F8(f1, a5);
}
new F3();
