const v1 = class {
    static toString(a3) {
        let [,v4,v5,v6] = -3.0;
    }
}
try { v1.toString(); } catch (e) {}
const v8 = new v1();
const v11 = new Float32Array(10);
const v12 = v11.join(v8);
const v14 = new Uint32Array();
try { v14.reduce(v12); } catch (e) {}
