function f1() {
    return f1;
}
function f2() {
    function f3() {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            const v8 = this.constructor;
            try { new v8(); } catch (e) {}
            for (let i11 = 0; i11 < 24941; i11++) {
            }
        }
        new F4();
        return { done: true };
    }
    return { next: f3 };
}
const v21 = Symbol.iterator;
f1.bind(null, ...{ [v21]: f2 });
