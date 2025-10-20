Symbol.iterator;
const v2 = {};
try {
    function f4() {
    }
    function f5() {
        function f6() {
            return Array(1048576).toString();
        }
        const v10 = { next: f6 };
        const v11 = v10.next();
        const v12 = v11.anchor();
        v12.c = v12;
        v11.lastIndexOf(Array);
        v10.next();
    }
    const v15 = Symbol.iterator;
    f4.bind(null, ...{ [v15]: f5 });
} catch(e19) {
}
