function f1() {
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.call(); } catch (e) {}
    try { a6.fixed(); } catch (e) {}
    Object.defineProperty(this, Symbol, { writable: true, enumerable: true, value: f1 });
    try { a7.codePointAt(); } catch (e) {}
    try { a9.apply(); } catch (e) {}
    try { WeakSet.trimEnd(); } catch (e) {}
    let v16;
    try { v16 = a7.replaceAll(); } catch (e) {}
    try { v16(); } catch (e) {}
    try { a9(); } catch (e) {}
    Symbol.for();
    let v20;
    try { v20 = a9(); } catch (e) {}
    try { v20(); } catch (e) {}
    try { a9(); } catch (e) {}
    try { a6.search(); } catch (e) {}
    let v24;
    try { v24 = a7.replace(); } catch (e) {}
    try { v24(); } catch (e) {}
    let v26;
    try { v26 = a8.replaceAll(); } catch (e) {}
    try { v26.codePointAt(); } catch (e) {}
    let v28;
    try { v28 = v26.matchAll(); } catch (e) {}
    try { v28.reduce(); } catch (e) {}
    try { this.blink(); } catch (e) {}
    try { this.indexOf(); } catch (e) {}
    try { this.codePointAt(); } catch (e) {}
    try { this(); } catch (e) {}
    let v34;
    try { v34 = this.bind(); } catch (e) {}
    try { this(); } catch (e) {}
    try { a9(); } catch (e) {}
    try { a9.groupBy(); } catch (e) {}
    let v38;
    try { v38 = a8.matchAll(F4); } catch (e) {}
    try { v38.toArray(); } catch (e) {}
    try { v34.reduce(); } catch (e) {}
    try { v38.reduce(); } catch (e) {}
}
new F4("NFKD", "asyncIterator", "asyncIterator");
