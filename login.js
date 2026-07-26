const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", async () => {

        const volunteer_id = document.getElementById("volunteer_id").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!volunteer_id || !password) {
            alert("الرجاء إدخال رقم التطوع والرقم السري");
            return;
        }

        const { data, error } = await supabase
            .from("volunteers")
            .select("*")
            .eq("volunteer_id", volunteer_id)
            .eq("password", password)
            .single();

        if (error || !data) {
            alert("رقم التطوع أو الرقم السري غير صحيح");
            return;
        }

        localStorage.setItem("volunteer", JSON.stringify(data));

        window.location.href = "profile.html";

    });

});
