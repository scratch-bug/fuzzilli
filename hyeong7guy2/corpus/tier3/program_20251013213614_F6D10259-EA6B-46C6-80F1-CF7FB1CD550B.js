let v1;
try { v1 = Uint8Array.fromHex(); } catch (e) {}
const v2 = new Uint8Array(Uint8Array, v1);
try { v2.setFromBase64(); } catch (e) {}
