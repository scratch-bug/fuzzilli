function f1() {
    return "🙌🏿";
}
f1.toString = f1;
this.unescape(f1);
