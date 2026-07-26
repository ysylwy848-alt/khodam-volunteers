document.addEventListener("DOMContentLoaded", () => {

    const volunteer = JSON.parse(localStorage.getItem("volunteer"));

    if (!volunteer) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("full_name").textContent = volunteer.full_name;
    document.getElementById("volunteer_id").textContent = volunteer.volunteer_id;
    document.getElementById("department").textContent = volunteer.department;
    document.getElementById("rank").textContent = volunteer.rank;
    document.getElementById("points").textContent = volunteer.points;
    document.getElementById("hours").textContent = volunteer.hours;
    document.getElementById("status").textContent = volunteer.status;

    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("volunteer");
        window.location.href = "index.html";
    });

});
