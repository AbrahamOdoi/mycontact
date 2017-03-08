(function() {

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	function onDeviceReady() {

		function init() {
			navigator.contacts.find([navigator.contacts.fieldType.displayName], gotContacts, errorHandler);
		}

		function errorHandler(e) {
			console.log("errorHandler: " + e);
		}

		function gotContacts(c) {
			console.log("gotContacts, number of results " + c.length);

			mobileDiv = document.querySelector("#mobile");
			emailDiv = document.querySelector("#email");

			/* Retriving phoneNumbers */
			for (var i = 0,
			    len = c.length; i < len; i++) {
				if (c[i].phoneNumbers && c[i].phoneNumbers.length > 0) {
					mobileDiv.innerHTML += "<p>" + c[i].displayName + "<br/>" + c[i].phoneNumbers[0].value + "</p>";
				}
			}

			/* Retriving Email */
			for (var i = 0,
			    len = c.length; i < len; i++) {
				if (c[i].emails && c[i].emails.length > 0) {
					emailDiv.innerHTML += "<p>" + c[i].emails[0].value + "</p>";
				}
			}
		}

		// document.getElementById("search").onclick = function() {
		// navigator.contacts.pickContact(function(contact) {
		//
		// alert('The following contact has been selected:' + JSON.stringify(contact));
		//
		// document.getElementById("search").value = contact.phoneNumbers[0].value;
		// alert(contact.phoneNumbers[0].value);
		//
		//
		//
		// document.getElementById("displayContacts").html(contact.phoneNumbers[0].value)
		//
		// }, function(err) {
		// alert('Error: ' + err);
		// });
		// };
	} ;
})();
