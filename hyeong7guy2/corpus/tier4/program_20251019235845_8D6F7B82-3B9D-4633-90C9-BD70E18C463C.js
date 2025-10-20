function f0() {
    return f0;
}
f0.prototype = f0;
f0.caller = f0;
