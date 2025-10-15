let v0 = -9223372036854775807;
function f1() {
    eval(++v0);
    return f1;
}
({ next: f1 }).next();
