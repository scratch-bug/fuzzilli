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
        const v9 = { next: f5 };
        const v10 = v9.next(v9, v9, v9, v9);
        v10.toString();
        const v12 = v10.concat(f1);
        try { v12(); } catch (e) {}
        v12[29416];
        return f4;
    }
    const v15 = Symbol.iterator;
    f3.bind(null, ...{ [v15]: f4 });
} catch(e19) {
}
("🙌🏿").fontsize();
