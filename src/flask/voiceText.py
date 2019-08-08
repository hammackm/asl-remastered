from flask import Flask, render_template, redirect, url_for, session, request, json, Response, jsonify
from flask_cors import CORS, cross_origin
import speech_recognition as sr


app = Flask(__name__)
CORS(app, support_credentials=True)


r = sr.Recognizer()


def voice_to_text():
    with sr.Microphone() as source:
        audio = r.adjust_for_ambient_noise(source)
        print('speak now')
        audio = r.listen(source)
        try:
            get=r.recognize_google(audio)
            print('got something:')
            print(get)
        except sr.UnknownValueError:
            print('error')
            get='No Input Recieved'
        except sr.RequestError as e:
            print('failed'.format(e))
            get='nope'
    print('done')
    return get


@app.route('/voicetotext', methods=['POST', 'GET'])
@cross_origin(support_credentials=True)
def voice_to_text_controller():
    response = voice_to_text()
    response_data = {"voiceToTextOutput": response}
    return jsonify(response_data)


if __name__ == '__main__':
    app.run(debug=True)
