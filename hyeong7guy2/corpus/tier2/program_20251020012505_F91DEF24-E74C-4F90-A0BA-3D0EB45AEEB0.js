function f1() {
    return Symbol;
}
try {
    function f3() {
        return f3;
    }
    function f4() {
        function f5() {
            return Array(1048576).toString();
        }
        const v10 = ({ next: f5 }).next();
        v10.concat();
        const v12 = v10.concat(f1);
        let v13;
        try { v13 = v12(Symbol, f1, v12, f4, Symbol); } catch (e) {}
        v12[29416];
        return v13;
    }
    const v15 = Symbol.iterator;
    f3.bind(null, ...{ [v15]: f4 });
} catch(e19) {
}
