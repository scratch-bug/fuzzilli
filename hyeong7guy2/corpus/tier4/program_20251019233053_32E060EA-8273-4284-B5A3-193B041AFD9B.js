function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a3;
}
new F0();
const v5 = class extends F0 {
}
new v5();
const v7 = class extends F0 {
    set d(a9) {
        function f10(a11) {
            function f13(a14) {
                async function* f15(a16, a17, a18, a19) {
                    [this,await this,this,this];
                }
                f15();
            }
            this.onmessage = f13;
        }
        new Worker(f10, { type: "function" });
    }
}
new v7();
