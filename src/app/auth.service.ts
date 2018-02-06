import * as Firebase from 'firebase';
import { Observable } from 'rxjs/Rx';
import { User } from 'firebase';
import { from } from 'rxjs/observable/from'

export interface AuthService{

   // userSignup(email, password);
        userSignup(email,password) : Observable<any>;
        userSignin(email,password) : Observable<any>;
        insertUserInfo(user : Firebase.User)
}

export class AuthServiceImpl implements AuthService{
    
       /* userSignup(email:any,password:any): Promise<any>{
            return this.signUpWithEmailAndPassword(email,password)
        }*/
// calling the usersignup and in method
        userSignup(email:any,password:any){
                   return this.signUpWithEmailAndPassword(email,password)
        }
        userSignin(email:any,password:any){
            return this.signInWithEmailAndPassword(email,password)
        }

    //insert method call
        insertUserInfo(user:Firebase.User)
        {
            this.storeUserinfo(user);
        }

    //call signUp and signIn methods

            private signUpWithEmailAndPassword(email,password):Observable<any>{
                return from(Firebase.auth().createUserWithEmailAndPassword(email,password))
            }

            private signInWithEmailAndPassword(email,password):Observable<any>{
                return from(Firebase.auth().signInWithEmailAndPassword(email,password))
            }

                private storeUserinfo(user:Firebase.User)
                {
                    console.log(user)
                }



    googleSignInUsingPopup(){

        console.log("Hello World")
    }

/*    private signUpWithEmailAndPassword(email, password){
        
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response: Firebase.User){
            console.log(response)
            let currentUser : Firebase.User = Firebase.auth().currentUser;
            console.log("current user is ", currentUser.email)
            console.log("current user is ", currentUser.displayName)
            

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
*/
    signInWithGoogle(){
        
    }


}





