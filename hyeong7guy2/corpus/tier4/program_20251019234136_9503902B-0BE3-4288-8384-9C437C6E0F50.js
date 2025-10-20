class C0 {
}
function f1() {
    class C3 {
        static {
            this.collation = this;
            try {
                ("object").localeCompare(C3);
            } catch(e6) {
            }
        }
    }
    function f7() {
        new C0(...arguments);
        arguments.e = 0;
        return "object";
    }
    f7();
    return C0;
}
class C12 extends f1 {
}
new C12();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
