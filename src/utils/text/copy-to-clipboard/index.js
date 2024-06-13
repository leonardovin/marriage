/**
 *
 */
export default function copyToClipboard(text) {
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value = text;                                // Set the value (content to be copied)
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof

  el.style.position = 'absolute';                 // Move outside the screen to make it invisible
  el.style.left = '-9999px';
  document.body.appendChild(el);                  // Append the <textarea> element to the document

  const selected =
    document.getSelection().rangeCount > 0        // Check if there's any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;

  el.select();                                    // Select the content
  document.execCommand('copy');                   // Copy text to clipboard

  document.body.removeChild(el);                  // Remove <textarea> element

  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);  // Restore the original selection
  }
  alert("Código gerado copiado com sucesso!");

}