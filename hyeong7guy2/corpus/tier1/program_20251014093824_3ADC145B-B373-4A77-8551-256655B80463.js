for (let i3 = 0, i4 = 10;
    i4;
    (() => {
        i4--;
        function f10() {
            function f11() {
                Error().stack;
                return { done: true };
            }
            return { next: f11 };
        }
        const v18 = Symbol.iterator;
        Date.bind(null, ...{ [v18]: f10 });
    })()) {
}
new BigUint64Array(1073741825);
