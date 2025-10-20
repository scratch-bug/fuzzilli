try {
    function f1() {
        return f1;
    }
    function f2() {
        function f3() {
            const v6 = new SharedArrayBuffer(25969);
            const v8 = new Uint8Array(v6);
            v8.copyWithin();
            return f2;
        }
        return ({ next: f3 }).next(f1, f1, Symbol, f3);
    }
    const v12 = Symbol.iterator;
    f1.bind(null, ...{ [v12]: f2 });
} catch(e16) {
}
