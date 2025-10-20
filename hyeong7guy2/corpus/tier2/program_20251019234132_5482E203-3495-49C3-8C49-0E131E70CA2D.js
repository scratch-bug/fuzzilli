const v9 = {
    [Symbol]() {
        const v8 = {
            next() {
                const v7 = {
                    construct(a4, a5) {
                        return "🙌🏿";
                    },
                };
                return this;
            },
        };
    },
};
function f10() {
}
try {
    function f12() {
        return Array;
    }
    function f13() {
        function f14() {
            return Array.toString();
        }
        ({ next: f14 }).next().replaceAll(f10);
        return v9;
    }
    const v19 = Symbol.iterator;
    f12.bind(null, ...{ [v19]: f13 });
} catch(e23) {
}
