for (let i3 = 0, i4 = 10;
    i4;
    (() => {
        const v7 = i4--;
        function f9() {
            function f10() {
                Error.prepareStackTrace = f10;
                Error(v7).stack;
                return { done: true };
            }
            return { next: f10 };
        }
        const v17 = Symbol.iterator;
        Date.bind(null, ...{ [v17]: f9 });
    })()) {
}
