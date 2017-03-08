// (function() {
// 
	// document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	// function onDeviceReady() {
// 
		// document.getElementById("search").onclick = function() {
			// navigator.contacts.pickContact(function(contact) {
				// alert('The following contact has been selected:' + JSON.stringify(contact));
// 
				// document.getElementById("search").value = contact.phoneNumbers[0].value;
				// alert(contact.phoneNumbers[0].value);
				// var countMyContacts = contactCount;
				// alert(countMyContacts);
// 
				// document.getElementById("displayContacts").html(contact.phoneNumbers[0].value)
// 
			// }, function(err) {
				// alert('Error: ' + err);
			// });
		// }
	// } ;
// })();


(function() {

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	function onDeviceReady() {

		document.getElementById("search").onclick = function() {
			navigator.contactsPhoneNumbers.list(function(contact) { 
		      // console.log(contacts.length + ' contacts found');
		      	alert(contact.length + ' contacts found')
		      	
		      for(var i = 0; i < contact.length; i++) {
		         // console.log(contacts[i].id + " - " + contacts[i].displayName);
		         for(var j = 0; j < contact[i].phoneNumbers.length; j++) {
		            var phone = contact[i].phoneNumbers[j];
		            // console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber+ ")");
		         }
		         alert(phone);
		      }
		   }, function(error) {
		      console.error(error);
		   });
			
	};
})();