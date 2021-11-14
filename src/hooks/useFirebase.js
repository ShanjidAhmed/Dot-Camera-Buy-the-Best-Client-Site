import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, getIdToken, updateProfile, signInWithPopup, signOut, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setuser] = useState({})
    const [token, setToken] = useState('');
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();

    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("")
    const googleProvider = new GoogleAuthProvider();


    const registerNewUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError("");
                const newUser = { email, displayName: name }
                setuser(newUser);
                saveUser(email, name, 'POST');
                // saveUser(email, name, "POST")
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.push("/")

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || "/"
                history.replace(destination)
                setAuthError("");

            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));

    }
    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, "PUT")
                setAuthError("");
                const destination = location?.state?.from || "/"
                history.replace(destination)

            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
        ;
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })

            } else {
                setuser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    useEffect(() => {
        fetch(`https://intense-hamlet-50472.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false));

    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://intense-hamlet-50472.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        registerNewUser,
        loginUser,
        logOut,
        isLoading,
        authError,
        signInWithGoogle,

    }

};


export default useFirebase;