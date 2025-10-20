const v1 = new Set();
const v2 = class {
    static #toString(a4, a5) {
        return gc();
    }
}
const v8 = new v2();
try { v8.constructor(); } catch (e) {}
const v10 = new v2();
try { v10.constructor(); } catch (e) {}
const v12 = /[pXx\ud808\udf45*]/dsymi;
class C13 extends v2 {
    [Set](a15, a16, a17, a18) {
        let [v19,,v20,v21] = v1;
        return v8;
    }
    static [v2] = Set;
}
C13.name;
const v23 = new C13();
const v24 = v23.constructor;
try { v24(); } catch (e) {}
const v26 = new C13();
const v27 = v26.constructor;
try { new v27(); } catch (e) {}
const v29 = new C13();
const v30 = new C13();
const v31 = v30?.constructor;
try { new v31(); } catch (e) {}
let v33 = 387551742n;
v33++;
const v36 = Temporal?.PlainMonthDay;
let v37;
try { v37 = new v36(v23); } catch (e) {}
v37 ?? v37;
const v39 = Temporal.Instant;
const v40 = v39?.__lookupGetter__;
try { new v40(v36); } catch (e) {}
try { v39.call(v33); } catch (e) {}
new v39(v33);
Symbol.iterator;
const v46 = [1.0812173278899344,441.4839164205782,1.3254763964458407e+308,-1000000000000.0];
[8,8,8,8,8];
const v49 = Temporal?.PlainTime;
try { new v49(); } catch (e) {}
Temporal.PlainDateTime;
const v52 = [8.681469775261856,-2.0];
let v53;
try { v53 = v52.unshift(v12); } catch (e) {}
-v53;
function F55() {
    if (!new.target) { throw 'must be called with new'; }
    const v57 = { done: v52 };
    const t53 = JSON.stringify;
    t53(v57);
    for (let v61 = 0; v61 < 5; v61++) {
        v61--;
    }
}
[8n,8n,v46,Set,v2];
const v65 = `
    /\xed\xa0\x80/gm;
`;
function f67() {
    return v29;
}
