function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f3() {
        return F0;
    }
    function f4() {
        function f5() {
            return this;
        }
        function f6() {
            function f7() {
                for (let v8 = 0; v8 < 5; v8++) {
                    JSON.stringify(Array(v8));
                }
                return { done: true };
            }
            return { next: f7 };
        }
        const v16 = Symbol.iterator;
        f5.bind(null, ...{ [v16]: f6 });
        function f20() {
            return { done: true };
        }
        return { next: f20 };
    }
    const v24 = Symbol.iterator;
    f3.bind(null, ...{ [v24]: f4 });
}
new F0();
