"use server";
const googleScriptURL =
  "https://script.google.com/macros/s/AKfycbzjT46w54F4rKzCMRiV4fHOXxNBzHyuI9Vja8gis45XUATfESPENR5PFTNs2TpfVK-tnA/exec";

export const addRegistration = async (formData) => {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const heardFrom = formData.get("heardFrom"); // ✅ Capture dropdown value
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
        heardFrom, // ✅ Send to script
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
