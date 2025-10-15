function f1() {
    Date.valueOf = Symbol;
    return Symbol;
}
this.escape(f1);
