function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4(a5, a6) {
    F0 && this;
    return a6;
}
new Worker(f4, { type: "function" });
function f13() {
    return Worker;
}
WebAssembly.instantiateStreaming().catch(f13);
function f17(a18) {
}
new Worker(f17, { type: "function" });
