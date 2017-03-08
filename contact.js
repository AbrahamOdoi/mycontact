(function() {

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	function onDeviceReady() {

		document.getElementById("search").onclick = function() {
			navigator.contacts.pickContact(function(contact) {
				alert('The following contact has been selected:' + JSON.stringify(contact));

				document.getElementById("search").value = contact.phoneNumbers[0].value;
				alert('myt ' + contact.phoneNumbers[0].value);

				document.getElementById("displayContacts").html = contact.phoneNumbers[0].value;
				document.getElementById("displayContacts").value = '2' + contact.phoneNumbers[0].value;

			}, function(err) {
				alert('Error: ' + err);
			});
		};
	} ;
})();
