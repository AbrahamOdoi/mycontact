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
			navigator.contactsPhoneNumbers.list(function(contacts) {
				alert('yes');
				// console.log(contacts.length + ' contacts found');
				alert(contacts.length + ' contacts found')

				for (var i = 0; i < contacts.length; i++) {
					// console.log(contacts[i].id + " - " + contacts[i].displayName);
					for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
						var phone = contacts[i].phoneNumbers[j];
						// console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber+ ")");
					}
					alert(phone);
				}
			}, function(error) {
				console.error(error);
			});
		};
	};
})();
