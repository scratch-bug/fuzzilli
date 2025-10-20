const v3 = new SharedArrayBuffer(13);
const v5 = new Uint8Array(v3);
function f6() {
    return f6;
}
function f7() {
    function f8() {
        new Uint32Array(v5);
        return { done: f8 };
    }
    return { next: f8 };
}
const v13 = Symbol.iterator;
f6.bind(null, ...{ [v13]: f7 });
