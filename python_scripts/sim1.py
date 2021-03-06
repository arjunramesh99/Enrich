import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Fetch the service account key JSON file contents
cred = credentials.Certificate('enrichDatabase-5d308ea31f24.json')
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://enrichdataba.firebaseio.com/'
})


ref = db.reference("/-LoDleczyn1ZSYo0B-eD/classes/-LoDlgMBL5m3s4LZLNjF/students")
ref.push({ "ls":0, "name":"GoogleMe"})
ref.push({ "ls":1, "name":"Yale"})
ref.push({ "ls":0, "name":"Ramesh"})
ref.push({ "ls":0, "name":"Ram"})
ref.push({ "ls":1, "name":"Christine"})
ref.push({ "ls":0, "name":"Kelsey"})
ref.push({ "ls":0, "name":"Chris"})
ref.push({ "ls":0, "name":"Adele"})
ref.push({ "ls":1, "name":"Travis"})
ref.push({ "ls":1, "name":"Scott"})
ref.push({ "ls":1, "name":"Quantavious"})
ref.push({ "ls":1, "name":"Octavian"})
ref.push({ "ls":0, "name":"Kelly"})
ref.push({ "ls":0, "name":"Mitchell"})
ref.push({ "ls":0, "name":"Ariana"})
ref.push({ "ls":0, "name":"Ven"})
ref.push({ "ls":1, "name":"Venkey"})
ref.push({ "ls":1, "name":"Arj"})
ref.push({ "ls":1, "name":"Fenves"})
ref.push({ "ls":0, "name":"George"})
ref.push({ "ls":0, "name":"Washington"})
ref.push({ "ls":1, "name":"UPENN_STUDENT1"})
ref.push({ "ls":1, "name":"Adit"})
ref.push({ "ls":0, "name":"Aditya"})
ref.push({ "ls":1, "name":"Rish"})
ref.push({ "ls":0, "name":"APPS_PENN"})
ref.push({ "ls":1, "name":"Mark"})
ref.push({ "ls":0, "name":"Julius"})
ref.push({ "ls":1, "name":"Greg"})
ref.push({ "ls":0, "name":"Mike"})
ref.push({ "ls":0, "name":"NAV"})
ref.push({ "ls":1, "name":"Gunna"})
ref.push({ "ls":1, "name":"Posty"})
ref.push({ "ls":0, "name":"McConnahey"})
ref.push({ "ls":0, "name":"Sam"})
ref.push({ "ls":1, "name":"Ehlinger"})
ref.push({ "ls":1, "name":"Hubert"})
ref.push({ "ls":1, "name":"Jon"})
ref.push({ "ls":0, "name":"Eddie"})
ref.push({ "ls":0, "name":"Haha"})
ref.push({ "ls":0, "name":"Clinton-Dix"})
ref.push({ "ls":0, "name":"Tarik"})
ref.push({ "ls":1, "name":"David"})
ref.push({ "ls":1, "name":"Malik"})
ref.push({ "ls":0, "name":"Jefferson"})
ref.push({ "ls":1, "name":"Student1"})
ref.push({ "ls":0, "name":"Student2"})
ref.push({ "ls":1, "name":"Student3"})
ref.push({ "ls":1, "name":"Student4"})
ref.push({ "ls":0, "name":"Student5"})
ref.push({ "ls":1, "name":"Student6"})
ref.push({ "ls":1, "name":"HACKDFW_WINNER_BABY"})

print(ref.get())
