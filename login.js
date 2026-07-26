import { db } from "./config.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", async () => {

        const volunteer_id = document.getElementById("volunteer_id").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!volunteer_id || !password) {
            alert("الرجاء إدخال رقم التطوع والرقم السري");
            return;
        }

        try {

            const snapshot = await getDocs(collection(db, "volunteers"));

            let volunteer = null;

            snapshot.forEach((doc) => {

                const data = doc.data();

                if (
                    data.volunteer_id === volunteer_id &&
                    data.password === password
                ) {
                    volunteer = data;
                }

            });

            if (!volunteer) {
                alert("رقم التطوع أو الرقم السري غير صحيح");
                return;
            }

            localStorage.setItem("volunteer", JSON.stringify(volunteer));

            window.location.href = "profile.html";

        } catch (err) {
            console.error(err);
            alert("حدث خطأ أثناء تسجيل الدخول");
        }

    });

});
