console.log("This is the popup script for the extension.");

// Add click event to the login button
document.addEventListener('DOMContentLoaded', function() {
	const loginBtn = document.getElementById('loginBtn');
	if (loginBtn) {
		loginBtn.addEventListener('click', function() {
			// This demonstrates popup.js is running on click
			alert('popup.js is running!');
		});
	}
});

(async()=>{
    const response = await chrome.runTime.sendMessage({ greeting: "Hello" });
})