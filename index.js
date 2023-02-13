// function sendMail() {
//   let params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };
//   const serviceID = "service_zduusv9";
//   const templateID = "template_u8icgd1";

//   emailjs.send(serviceID, templateID, params).then((res) => {
//     console.log(res);
//     "message sent successfully" + res.status;
//   });
// }

// function message() {
//   let name = document.getElementById("name");
//   let email = document.getElementById("email");
//   let message = document.getElementById("message");
//   const success = document.getElementById("success");
//   const danger = document.getElementById("danger");

//   if (name.value === "" || email.value === "" || message.value === "") {
//     danger.style.display = "block";
//   } else {
//     setTimeout(() => {
//       name.value = "";
//       email.value = "";
//       message.value = "";
//     }, 2000);

//     success.style.display = "block";
//   }

//   setTimeout(() => {
//     danger.style.display = "none";
//     success.style.display = "none";
//   }, 4000);
// }
