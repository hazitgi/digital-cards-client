export function generateVCF(
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  organization: string,
  title: string
) {
  // Construct the vCard content
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}
N:${lastName};${firstName};;;
TEL;TYPE=CELL:${phoneNumber}
EMAIL:${email}
ORG:${organization}
TITLE:${title}
END:VCARD`;

  // Create a Blob object to save as a .vcf file
  const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });

  // Create a temporary URL for the Blob
  const url = window.URL.createObjectURL(blob);

  // Create an anchor element
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = `${firstName}_${lastName}.vcf`;

  // Append the anchor element to the body and click it
  document.body.appendChild(a);
  a.click();

  // Clean up
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
