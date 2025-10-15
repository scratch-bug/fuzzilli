const v1 = WebAssembly.Global;
try { v1.call(v1, WebAssembly, WebAssembly); } catch (e) {}
