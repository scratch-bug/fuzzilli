Object[1073741825] = "my";
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Proxy(Object, {});
    v8.freeze(v8);
}
new F2(Object, "my");
