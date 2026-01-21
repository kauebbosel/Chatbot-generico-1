from flask import Flask, jsonify
from flask_cors import CORS # Necessário para o JS conseguir acessar o Python
import random

app = Flask(__name__)
CORS(app) # Permite que seu HTML acesse esta API

@app.route('/api/v1/toasts/pendentes', methods=['GET'])
def get_toast():
    notificacoes = [
        {
            "titulo": "🦉 Mestre Duolingo",
            "categoria": "humor",
            "mensagem": "Vi que a luz da sala está acesa... Você quer que eu chame o capitão planeta ou você mesmo apaga?",
            "acoes": [{"label": "Apagar agora", "tipo": "dismiss", "primary": True}]
        },
        {
            "titulo": "💡 Norma NBR 5410",
            "categoria": "tecnico",
            "mensagem": "Sabia que fiações antigas podem dissipar calor e aumentar sua conta em até 15%?",
            "acoes": [{"label": "Saber mais", "tipo": "expand", "primary": True}, {"label": "Ok", "tipo": "close", "primary": False}]
        }
    ]
    return jsonify(random.choice(notificacoes))

if __name__ == '__main__':
    print("Servidor de teste rodando em http://localhost:8000")
    app.run(port=8000)