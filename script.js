function addEntry() {
    var mood = document.getElementById("mood").value;
    var note = document.getElementById("note").value;
  
    if (mood.trim() === "") {
      alert("Please select a mood.");
      return;
    }
  
    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString();
    var timeString = currentDate.toLocaleTimeString();
    var dateTimeString = dateString + " " + timeString;
  
    var entry = document.createElement("div");
    entry.classList.add("entry");
    entry.innerHTML = "<p><strong>" + dateTimeString + "</strong>: " + mood + "</p><p>" + note + "</p>";
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function () {
      entry.remove();
    };
  
    entry.appendChild(deleteButton);
  
    document.getElementById("entries").appendChild(entry);
  
    // Reset form fields
    document.getElementById("mood").value = "";
    document.getElementById("note").value = "";
  }
  
  function toggleFeature(featureId) {
    var feature = document.getElementById(featureId);
    if (feature.style.display === "none") {
      feature.style.display = "block";
    } else {
      feature.style.display = "none";
    }
  }
  
  function scrollToFeature(featureId) {
    var feature = document.getElementById(featureId);
    feature.scrollIntoView({ behavior: "smooth" });
  }