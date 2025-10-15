try {
    function f0() {
        return f0;
    }
    function f1() {
        return f1;
    }
    f0.bind(null, ...{ [f1]: f1 });
} catch(e5) {
}
