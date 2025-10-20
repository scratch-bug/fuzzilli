const v2 = new Int8Array(255);
WebAssembly.validate(v2, { importedStringConstants: "🙌🏿" });
