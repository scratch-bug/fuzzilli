function f1() {
    try {
        eval("function");
        const v5 = Symbol();
        v5(v5, f1, "function", eval, eval);
    } catch(e7) {
    }
    return eval;
}
({ next: f1 }).next();
