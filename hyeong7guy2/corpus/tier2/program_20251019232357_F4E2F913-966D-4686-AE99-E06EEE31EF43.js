function f1() {
    return f1;
}
try {
    function f3() {
        return Symbol;
    }
    function f4() {
        function f5() {
            return Array(1048576).toString();
        }
        const v9 = { next: f5 };
        v9.next(v9, f4, f3, f4, f3).concat(f1)[29416];
        return f4;
    }
    const v13 = Symbol.iterator;
    f3.bind(null, ...{ [v13]: f4 });
} catch(e17) {
}
