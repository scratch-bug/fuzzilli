function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        return a2;
    }
    function f6() {
        function f7() {
            return { done: true };
        }
        for (let i11 = 0; i11 < 20000; ++i11) {
            i11 * undefined;
        }
        return { next: f7 };
    }
    const v20 = Symbol.iterator;
    f5.bind(null, ...{ [v20]: f6 });
}
new F0();
