function f0() {
    return f0;
}
String.prototype.localeCompare.apply(f0, [f0,f0]);
