function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return f11;
        }
        function f12() {
            function f13() {
                for (let v15 = 0; v15 < 100; v15++) {
                    const v17 = 2 ** v15;
                    const v19 = new Uint8Array();
                    v19[v17] = 1;
                }
                return { done: true };
            }
            return { next: f13 };
        }
        const v23 = Symbol.iterator;
        f11.bind(null, ...{ [v23]: f12 });
    }
    new F4();
}
new F0();
