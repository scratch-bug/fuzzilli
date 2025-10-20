try {
    function f2() {
        return f2;
    }
    function f3() {
        function f4() {
            return Array(536870887).toString();
        }
        return { next: f4 };
    }
    const v9 = Symbol.iterator;
    f2.bind(null, ...{ [v9]: f3 });
} catch(e13) {
}
