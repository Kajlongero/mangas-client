const makeCryptoKey = async (key: string) => {
  const binary = atob(key);

  const arrBuffer = new Uint8Array(binary.length).map((_, i) =>
    binary.charCodeAt(i)
  );

  const cryptoKey = await window.crypto.subtle.importKey(
    "spki",
    arrBuffer.buffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    false,
    ["encrypt"]
  );

  return cryptoKey;
};

const converToBase64 = (data: Record<string, ArrayBuffer>) => {
  const obj: Record<string, string> = {};

  for (const [key, val] of Object.entries(data)) {
    let binary = "";

    const bytes = new Uint8Array(val);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    obj[key] = btoa(binary);
  }

  return obj;
};

export const handleEncrypt = async <T>(data: T, key: string) => {
  const cryptoKey = await makeCryptoKey(key);
  const obj: Record<string, unknown> = {};

  const encoder = new TextEncoder();

  for (const [name, value] of Object.entries(data as Record<string, unknown>)) {
    const text = await window.crypto.subtle.encrypt(
      { name: "RSA-OAEP" },
      cryptoKey,
      encoder.encode(`${value}`)
    );

    obj[name] = text;
  }

  const base64 = converToBase64(obj as Record<string, ArrayBuffer>);

  return base64 as T;
};
