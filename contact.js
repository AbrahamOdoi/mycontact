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
		alert('yes');
		document.getElementById("search").onclick = function() {
			navigator.contactsPhoneNumbers.list(function(contacts) {
				alert(contacts.length + ' contacts found')

			}, function(error) {
				console.error(error);
			});
		};
	};
})();
