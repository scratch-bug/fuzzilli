function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
    }
    function f7() {
        function f8() {
            return { done: true };
        }
        for (let v11 = 0; v11 < 100; v11++) {
            3 * undefined;
        }
        return { next: f8 };
    }
    const v15 = Symbol.iterator;
    f6.bind(null, ...{ [v15]: f7 });
}
new F1();
