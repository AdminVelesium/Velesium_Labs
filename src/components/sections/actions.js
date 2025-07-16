"use server";
const googleScriptURL =
  "https://script.google.com/macros/s/AKfycbytfx66EJyfisV2xYtEmn-cZV3XSPSQwuHjPs59mh41TdI92EhU-TnOjOP47GXrH6Vu/exec";
export const addRegistration = async (formData) => {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    const res = await fetch(googleScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "Velesium lab",
        fullName,
        email,
        message,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to add registration");
    }

    return { successMessage: "we will get back to you shortly" };
  } catch (error) {
    console.error("Error adding registration:", error);
    throw error;
  }
};
