const v1 = Symbol.iterator;
function f2() {
    return Symbol;
}
Object.defineProperty(("b").__proto__, v1, { writable: true, value: f2 });
