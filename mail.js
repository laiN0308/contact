const firebaseConfig = {
  //   copy your firebase config informations
   apiKey: "AIzaSyDWEQVLCW9e-OJOC28zMRX7ikmI1vc3OmM",
    authDomain: "contactformular-160e5.firebaseapp.com",
    databaseURL: "https://contactformular-160e5-default-rtdb.firebaseio.com",
    projectId: "contactformular-160e5",
    storageBucket: "contactformular-160e5.firebasestorage.app",
    messagingSenderId: "440736421985",
    appId: "1:440736421985:web:4ed4ef075fcd4f08393220"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
