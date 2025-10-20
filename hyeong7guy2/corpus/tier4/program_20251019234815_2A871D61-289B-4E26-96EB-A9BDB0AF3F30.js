const v1 = /(?:a?)*/dvi;
function f2() {
    function* f3(a4, a5, a6) {
        yield a4;
        return Symbol;
    }
    return f3(f3, f2, f2);
}
v1[Symbol.iterator] = f2;
const v11 = new Int16Array(v1);
v11.reverse();
