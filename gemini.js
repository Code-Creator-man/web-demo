
        import { GoogleGenerativeAI } from "@google/generative-ai";

        async function callGemini() {
            // !!! DANGER ZONE - FOR LOCAL TESTING ONLY !!!
            // !!! NEVER DEPLOY THIS TO A PUBLIC WEBSITE WITH THE KEY HARDCODED OR USER-ENTERED !!!
            const apiKey = document.getElementById('apiKeyInput').value;
            if (!apiKey) {
                alert("Please enter an API Key for testing.");
                return;
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const prompt = "What is the capital of France?";
            document.getElementById('response').innerText = "Thinking...";

            try {
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                document.getElementById('response').innerText = text;
            } catch (error) {
                console.error("Error:", error);
                document.getElementById('response').innerText = "Error: " + error.message;
            }
        }
        window.callGemini = callGemini; // Make it accessible from HTML onclick
   