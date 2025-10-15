let v1;
try { v1 = WebAssembly.Suspending(WebAssembly, WebAssembly); } catch (e) {}
function f2() {
    return f2;
}
WebAssembly.instantiateStreaming(v1, v1, v1).catch(f2);
