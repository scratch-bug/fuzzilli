function f0(a1, a2) {
    try {
        try { f0(a2, a1); } catch (e) {}
    } catch(e4) {
    }
    try { Math.sqrt(NaN); } catch (e) {}
    return Math;
}
try { f0(); } catch (e) {}
try { f0(); } catch (e) {}
