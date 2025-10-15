let v1;
try { v1 = new Symbol(); } catch (e) {}
try {
    function f3() {
        return Array;
    }
    function f4() {
        function f5() {
            v1[Array(1048576)] = 1048576;
            return f5;
        }
        const v8 = { next: f5 };
        v8.next();
        return v8;
    }
    const v10 = Symbol.iterator;
    f3.bind(null, ...{ [v10]: f4 });
} catch(e14) {
}
