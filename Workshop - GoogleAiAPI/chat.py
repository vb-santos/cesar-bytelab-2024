import google.generativeai as genai
from decouple import config

GOOGLE_API_KEY = config('GOOGLE_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)

generative_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generative_config)

chat_session = model.start_chat(
    history=[]
)

while True:
    user_input = input("Você: ")
    response = chat_session.send_message(user_input)
    print("Bot: ", response.text)