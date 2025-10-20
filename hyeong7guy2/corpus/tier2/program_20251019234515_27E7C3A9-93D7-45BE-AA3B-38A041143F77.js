const v2 = [6];
function f3() {
    return v2;
}
function f4() {
    const v10 = {
        valueOf(a6, a7, a8, a9) {
            v2.length *= -5.0;
            return -5.0;
        },
    };
    return v10;
}
const v11 = f4();
try { v11.valueOf(f4, 6, v11, f4); } catch (e) {}
const v15 = new Proxy(f3, { construct: f4 });
const v16 = new v15(f3, f4, f4, v15, Proxy);
try { v16.valueOf(); } catch (e) {}
