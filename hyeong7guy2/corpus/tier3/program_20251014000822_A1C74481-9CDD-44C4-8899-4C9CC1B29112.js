const v2 = new Uint8Array(1024);
Array.fromAsync(v2);
try { Uint8Array.fromBase64("h"); } catch (e) {}
