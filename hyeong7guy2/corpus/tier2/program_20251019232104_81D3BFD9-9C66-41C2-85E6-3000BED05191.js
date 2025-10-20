try {
    const v3 = new Proxy(Symbol, { has: Symbol });
    v3.toString = Symbol;
    -33724 in v3;
} catch(e6) {
}
