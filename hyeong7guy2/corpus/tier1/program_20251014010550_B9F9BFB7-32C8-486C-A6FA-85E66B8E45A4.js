try {
    function f2() {
        return Array;
    }
    function f3() {
        function f4() {
            return Array(1048576).toString();
        }
        return { next: f4 };
    }
    const v9 = Symbol.iterator;
    f2.bind(null, ...{ [v9]: f3 });
} catch(e13) {
}
