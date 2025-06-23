from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
db = SQLAlchemy(app)

class Produto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    categoria = db.Column(db.String(50))
    quantidade = db.Column(db.Integer)
    preco = db.Column(db.Float)

class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    genero = db.Column(db.String(10))
    idade = db.Column(db.Integer)
    escolaridade = db.Column(db.String(100))
    renda = db.Column(db.Float)

class Venda(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    produto_id = db.Column(db.Integer, db.ForeignKey('produto.id'))
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    quantidade = db.Column(db.Integer)
    valor_total = db.Column(db.Float)

@app.route("/produtos", methods=["POST"])
def criar_produto():
    data = request.json
    novo = Produto(**data)
    db.session.add(novo)
    db.session.commit()
    return jsonify({"message": "Produto cadastrado!"})

@app.route("/produtos", methods=["GET"])
def listar_produtos():
    produtos = Produto.query.all()
    return jsonify([{
        "id": p.id,
        "nome": p.nome,
        "categoria": p.categoria,
        "quantidade": p.quantidade,
        "preco": p.preco
    } for p in produtos])

@app.route("/vendas", methods=["POST"])
def registrar_venda():
    data = request.json
    venda = Venda(**data)
    db.session.add(venda)
    db.session.commit()
    return jsonify({"message": "Venda registrada!"})

@app.route("/clientes", methods=["POST"])
def criar_cliente():
    data = request.json
    novo = Cliente(**data)
    db.session.add(novo)
    db.session.commit()
    return jsonify({"message": "Cliente cadastrado!"})

@app.route("/clientes", methods=["GET"])
def listar_clientes():
    clientes = Cliente.query.all()
    return jsonify([{
        "id": c.id,
        "nome": c.nome,
        "genero": c.genero,
        "idade": c.idade,
        "escolaridade": c.escolaridade,
        "renda": c.renda
    } for c in clientes])

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)