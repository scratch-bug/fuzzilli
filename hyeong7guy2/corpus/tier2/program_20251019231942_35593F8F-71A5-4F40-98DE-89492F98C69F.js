const v2 = new Int16Array(50);
function f3() {
    return v2;
}
const v4 = [693913.4712015034,-314050.5385797281];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a7, "constructor", { enumerable: true, value: f3 });
    function f9(a10) {
        const t9 = v4.constructor;
        t9()[37];
        return 50;
    }
    f9();
    %OptimizeMaglevOnNextCall(f9);
    f9();
}
new F5(Int16Array);
new F5(v4);
