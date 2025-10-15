("function").normalize("NFKC");
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
}
new F3();
