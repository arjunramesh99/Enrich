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

name = ""
while(name != "QUIT"):
	print("Enter a name: ")
	name = str(input())
	if(name != "QUIT"):
		print("Enter 0 for red, 1 for green: ")
		ls = int(input())

		ref.push({ "ls":ls, "name":name})

		print(name, " ---- ", ls)

	