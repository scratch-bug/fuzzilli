const v0 = [-23851,268435440,1073741823,-1388551862,26113,15];
function f1() {
    return v0;
}
Object.defineProperty(WeakSet, Symbol.toPrimitive, { value: f1 });
Intl.localeMatcher = WeakSet;
const v6 = Intl.DisplayNames;
v6.supportedLocalesOf();
try { new v6(Intl, Intl); } catch (e) {}
