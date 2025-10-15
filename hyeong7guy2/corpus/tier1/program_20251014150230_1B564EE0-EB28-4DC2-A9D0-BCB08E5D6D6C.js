try {
    function f2() {
        return Symbol;
    }
    function f3() {
        function f4() {
            return Array(1048576).toString();
        }
        const v9 = ({ next: f4 }).next();
        v9.search(v9);
        return Symbol;
    }
    const v11 = Symbol.iterator;
    f2.bind(null, ...{ [v11]: f3 });
} catch(e15) {
}
