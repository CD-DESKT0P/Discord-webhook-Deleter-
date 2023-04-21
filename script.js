// Get references to DOM elements
const deleteButton = document.querySelector("#delete-button");
const webhookUrlInput = document.querySelector("#webhook-url");
const notification = document.querySelector("#notification");

// Add event listener to delete button
deleteButton.addEventListener("click", () => {
  // Get user input from webhook URL input field
  const webhookUrl = webhookUrlInput.value;

  // Call Discord API to delete webhook
  fetch(webhookUrl, {
    method: "DELETE"
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Webhook not found.");
      }
      // Display notification on successful deletion
      notification.classList.remove("error");
      notification.classList.add("active");
      notification.textContent = "Webhook deleted successfully!";
      setTimeout(() => {
        notification.classList.remove("active");
      }, 3000);
    })
    .catch(error => {
      console.error(error);
      // Display error notification on failure
      notification.classList.remove("active");
      notification.classList.add("error");
      notification.textContent = error.message;
      setTimeout(() => {
        notification.classList.remove("error");
      }, 3000);
    });
});