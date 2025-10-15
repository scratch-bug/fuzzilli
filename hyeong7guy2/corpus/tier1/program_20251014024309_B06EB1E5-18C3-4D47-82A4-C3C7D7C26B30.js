function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
Reflect.preventExtensions(F0);
