function F0() {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(Date, "a", { enumerable: true, value: `compileStreaming${1}catch` });
}
new F0();
new F0();
