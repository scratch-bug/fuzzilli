const v0 = [-1.7976931348623157e+308];
const v2 = Symbol.iterator;
const v10 = {
    [v2]() {
        const v9 = {
            next() {
                10 == 0;
                return {};
            },
        };
        return v9;
    },
};
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F11(F11, F11);
function f17(a18, a19, a20) {
    try { a19.__proto__ = a20; } catch (e) {}
}
let v21;
try { v21 = f17(false, v15, v10); } catch (e) {}
class C24 extends F11 {
    #valueOf(a26, a27) {
    }
    static p(a29, a30, a31, a32) {
        return v0;
    }
}
function F33(a35) {
    if (!new.target) { throw 'must be called with new'; }
}
new F33();
const v37 = [2.2250738585072014e-308,8.275474223241275,0.6822218279785957];
const v38 = {};
class C41 {
}
new C41();
const v45 = Object.create({});
for (let i47 = 0;
    i47 < 20000;
    (() => {
        i47++;
        new Uint16Array(0);
        function f55(a56, a57, a58, a59) {
            return i47;
        }
        try { f55(v37, v37, v37, v21); } catch (e) {}
    })()) {
    const v62 = {};
    const v65 = i47 % 2 ? v62 : v45;
    v65.toISOString = {};
}
const v69 = {};
const v70 = {};
