import * as Firebase from 'firebase';

export interface AuthService{

    userSignup(email, password);
<<<<<<< HEAD

}

export class AuthServiceImpl implements AuthService{
    
    userSignup(email: any, password: any) {
        this.signUpWithEmailAndPassword(email, password)
    }

    googleSignInUsingPopup(){

        console.log("Hello World")
=======

}

export class AuthServiceImpl implements AuthService{
    
    userSignup(email: any, password: any) {
        this.signUpWithEmailAndPassword(email, password)
>>>>>>> 2dcf029f9b211a83a4dabe298a371782e6fdf754
    }

    private signUpWithEmailAndPassword(email, password){
        
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response: Firebase.User){
            console.log(response)
            let currentUser : Firebase.User = Firebase.auth().currentUser;
<<<<<<< HEAD
            console.log("current user is ", currentUser.email)
            console.log("current user is ", currentUser.displayName)
=======
            console.log("urrent user is ", currentUser.email)
            console.log("urrent user is ", currentUser.displayName)
>>>>>>> 2dcf029f9b211a83a4dabe298a371782e6fdf754

            currentUser.getIdToken(true).then( (token: string) => {
                console.log("TOken is ", token )
            }, (error : any) =>{
                console.log(error)
            } )

            console.log("we got google firebase auth response")


        }).catch(function(error){
            console.log(error.message)
        })

        console.log("Firebase is finished")

    }

    signInWithGoogle(){
        
    }

}






