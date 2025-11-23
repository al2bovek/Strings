"use strict";
// Write a JavaScript function to hide email addresses to protect from unauthorized user.

// const eMail = prompt("email address");
const hideEmailAdress = (eMail = "robin_singh@example.com") => {
    const etaPosition = eMail.indexOf("@");
    let result = `${eMail.substring(0, 5)}...${eMail.substring(etaPosition)}`;
    return result;
}
document.getElementById("string").innerHTML = hideEmailAdress();