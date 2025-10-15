function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
typeof F4 === "boolean";
