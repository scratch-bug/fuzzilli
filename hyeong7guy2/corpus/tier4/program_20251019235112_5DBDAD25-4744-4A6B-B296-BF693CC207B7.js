const v1 = ("🙌🏿").valueOf("🙌🏿", "🙌🏿");
function f2() {
    return v1;
}
String.prototype.localeCompare.apply(f2, [f2]);
