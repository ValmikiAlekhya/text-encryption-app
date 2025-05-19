const secretKey = "my$ecretK3y!";

function encryptText() {
  const text = document.getElementById("inputText").value;
  const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
  document.getElementById("outputText").value = encrypted;
}

function decryptText() {
  const encrypted = document.getElementById("inputText").value;
  try {
    const decrypted = CryptoJS.AES.decrypt(encrypted, secretKey);
    const originalText = decrypted.toString(CryptoJS.enc.Utf8);
    document.getElementById("outputText").value = originalText || "Invalid Key or Text";
  } catch (error) {
    document.getElementById("outputText").value = "Error decrypting text";
  }
}