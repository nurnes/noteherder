import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCxOKgyr07hJi3MNhIN0wQvGg8JWZtg1m0",
    authDomain: "noteherder-f84d8.firebaseapp.com",
    databaseURL: "https://noteherder-f84d8.firebaseio.com",
    projectId: "noteherder-f84d8",
    storageBucket: "noteherder-f84d8.appspot.com",
    messagingSenderId: "236663941337"
})

const db = database(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

export default Rebase.createClass(db)
