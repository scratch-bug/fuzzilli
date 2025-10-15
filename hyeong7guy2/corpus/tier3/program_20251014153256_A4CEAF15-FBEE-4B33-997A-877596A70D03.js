class C1 {
    static get b() {
        function f3() {
            return this;
        }
        let v4 = f3.bind();
    }
}
const v5 = [C1,-30353];
const v7 = Uint8ClampedArray.constructor;
try { v7(v5); } catch (e) {}
