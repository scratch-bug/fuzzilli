function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
try {
    function f7() {
        return Symbol;
    }
    f7.bind(null, ...{ [Symbol]: F0 });
} catch(e11) {
}
