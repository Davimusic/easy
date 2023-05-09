from flask import Flask, render_template, request, jsonify, session, redirect,  url_for
import pymongo 
import bcrypt                
from bson.objectid import ObjectId  # para poder usar _id de mongo


app = Flask(__name__)
app.secret_key = 'mi clave secreta'

#conexcion a base de datos     
myClient = pymongo.MongoClient("mongodb+srv://davis123:davis123@cluster0.hujqu.mongodb.net/test3")
myDb = myClient["webNoCode"]#basde de datos
myCollection=myDb["num1"]#coleccion1

def validarExistenciaUsuarioDB(correo):
    usuarios = myDb.myCollection.find({'correo': {'$exists': True}})
    for usuario in usuarios:
        if usuario['correo'] == correo:
            return 'existe'
    return 'noExiste'

def validarExistenciaUsuarioCache():
    try: 
        if session['correo'] != None:
            return 'siExiste'
    except KeyError:
        return 'noExiste'

def retornarContrasenaUsuario(correo):
    usuarios = myDb.myCollection.find({'correo': {'$exists': True}})
    for usuario in usuarios:
        if usuario['correo'] == correo:
            return usuario['contrasena']

def retornarUbicacionActual():
    info = myDb.myCollection.find({'correo': session['correo']})
    for inf in info:
        return inf['ubicacionActual']

def actualizarObjetoDB(doc):
    info = myDb.myCollection.find({'correo': session['correo']})
    query = {}
    for inf in info:
        query = {"_id": ObjectId(inf['_id'])}
    updateTask = {"$set": doc}
    #print(updateTask)
    myDb.myCollection.update_one(query, updateTask)

def buscarCaracterParaReemplazar(text, caracterABuscar, caracterAReemplazar):
    #print(f'text: {text}')
    #print(f'caracterABuscar: {caracterABuscar}')
    #print(f'caracterAReemplazar: {caracterAReemplazar}')
    tex = ''
    for i in range(len(text)):
        if text[i] != caracterABuscar:
            tex += text[i]
        else:
            tex += caracterAReemplazar
    #print(tex)
    return tex             

@app.route('/', methods=['GET', 'POST'])
def hello():
    if request.method == 'GET':
        if validarExistenciaUsuarioCache() == 'siExiste':
            return redirect("/edicion")
        else:
            return render_template('index.html', mensaje = '')    
    else:
        correo = request.form['email']
        contrasena = request.form['password']
        contrasena2 = request.form['password2'] 
        accion = request.form['loginUso']
        
        if accion == 'usuarioExistente':
            if validarExistenciaUsuarioDB(correo) == 'existe'and bcrypt.checkpw(contrasena.encode('utf-8'), retornarContrasenaUsuario(correo)):
                session['correo'] = correo
                return redirect("/edicion/" + retornarUbicacionActual())
            else:
                return render_template('index.html', mensaje = 'error')
        else :
            if contrasena != contrasena2:
                return render_template('index.html', mensaje = 'contrasenasDiferentes')   
            elif validarExistenciaUsuarioDB(correo) == 'existe':
                return render_template('index.html', mensaje = 'correoExistente')   
            else:
                contrasenaEncriptada = bcrypt.hashpw(contrasena.encode('utf-8'), bcrypt.gensalt())
                doc = {"correo": correo, 'contrasena':contrasenaEncriptada, 'menu': '', 'footer': '', 'ubicacionActual': 'inicio', 'inicio': {'cadenaDiccionario': '', 'cadenaDiccStyleBody': '', 'cadenaPaletaColores': '[["rgba(120, 40, 70, 1)", "color1"], ["rgba(100, 100, 100, 1)", "color2"], ["rgba(60, 100, 60, 1)", "color3"], ["rgba(45, 80, 100, 1)", "color4"], ["rgba(10, 100, 60, 1)", "color5"], ["rgba(20, 30, 40, 1)", "color6"], ["rgba(250, 250, 0, 1)", "color7"]]', 'TipoUsoFondoBody': 'color'}}
                myDb.myCollection.insert_one(doc)
                session['correo'] = correo
                return redirect("/edicion/inicio")

@app.route('/edicion/<string:nombreMenu>', methods=['GET', 'POST'])
def edicionRutas(nombreMenu):
    if validarExistenciaUsuarioCache() != 'siExiste':
        return redirect("/")
    
    nombreMenu = buscarCaracterParaReemplazar(nombreMenu, ' ', '%')

    if request.method == 'GET':
        d = myDb.myCollection.find({'correo': session['correo']})
        for documento in d:
            try: 
                documento[nombreMenu]
                #print(documento)
                menu = documento['menu']
                footer = documento['footer']
                menu = buscarCaracterParaReemplazar(documento['menu'], "'", '&')
                footer = buscarCaracterParaReemplazar(documento['footer'], "'", '&')
                
                return render_template('edicion.html', diccionario = documento[nombreMenu]['cadenaDiccionario'], styleBody = documento[nombreMenu]['cadenaDiccStyleBody'], ubicacionActual = nombreMenu, menu = menu, footer = footer, cadenaPaletaColores = documento[nombreMenu]['cadenaPaletaColores'], TipoUsoFondoBody = documento[nombreMenu]['TipoUsoFondoBody'])
            except KeyError:
                doc = {'ubicacionActual': nombreMenu, nombreMenu: {'cadenaDiccionario': '', 'cadenaDiccStyleBody': ''}}
                actualizarObjetoDB(doc)
                return redirect("/edicion/" + nombreMenu)
    else:
        cadenaDiccionario = request.form['infoDiccionario']
        cadenaDiccStyleBody = request.form['infostyleBody']
        cadenaPaletaColores = request.form['infoPaletaColores']
        TipoUsoFondoBody = request.form['infoTipoUsoFondoBody']
        print('entra')
        paso = eval(cadenaDiccionario)
        num = 0
        for u in paso:
            for llave in u.keys():
                if llave == 'menu':
                    menu = str(paso[num])
                if llave == 'footer':
                    footer = str(paso[num]    )
            num += 1  

        doc = {'menu': menu, 'footer': footer, 'ubicacionActual': nombreMenu, nombreMenu: {'cadenaDiccionario': cadenaDiccionario, 'cadenaDiccStyleBody': cadenaDiccStyleBody, 'cadenaPaletaColores': cadenaPaletaColores, 'TipoUsoFondoBody': TipoUsoFondoBody}}
        actualizarObjetoDB(doc)
        return redirect("/edicion/" + nombreMenu)

@app.route('/pagos', methods=['GET'])
def pagos():
    return render_template('pagos.html')


if __name__ == '__main__':
    app.run(debug=True, port=5300)    

'''
@app.route('/edicion', methods=['GET'])
def edicion():
    if validarExistenciaUsuarioCache() != 'siExiste':
        return redirect("/")
    
    return render_template('edicion.html')

@app.route('/completado', methods=['GET'])
def completado():
    return render_template('completado.html')

@app.route('/XD', methods=['POST'])
def xd():
    if validarExistenciaUsuarioCache() != 'siExiste':
        return redirect("/")

    cadenaDiccionario = request.form['infoDiccionario']
    cadenaDiccStyleBody = request.form['infostyleBody']

    doc = {"correo": session['correo'], 'inicio': {'cadenaDiccionario': cadenaDiccionario, 'cadenaDiccStyleBody': cadenaDiccStyleBody}}
    #print(doc)
    #myDb.myCollection.insert_one(doc)

    info = myDb.myCollection.find({'correo': session['correo']})
    query = {}
    for inf in info:
        query = {"_id": ObjectId(inf['_id'])}
        #print(inf['_id'])
    #query = {"_id": ObjectId('640102e8b36c14b0651d2f3f')}
    updateTask = {"$set": doc}
    myDb.myCollection.update_one(query, updateTask)
    
    
    d = myDb.myCollection.find({'correo': session['correo']})
    #print(d)
    for documento in d:
        documento['inicio']
        
    print(documento['inicio']['cadenaDiccionario'])  
    print(documento['inicio']['cadenaDiccStyleBody'])        
    
    return render_template('edicion.html', diccionario = documento['inicio']['cadenaDiccionario'], styleBody = documento['inicio']['cadenaDiccStyleBody'])

    #return str(cadena)
'''


