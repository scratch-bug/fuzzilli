for (let i4 = 0, i5 = 10;
    i5;
    (() => {
        i5--;
        function f11() {
            function f12() {
                Error().stack;
                return { done: true };
            }
            return { next: f12 };
        }
        const v19 = Symbol.iterator;
        Date.bind(null, ...{ [v19]: f11 });
    })()) {
}
new BigUint64Array(1073741825);
