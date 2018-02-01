import * as Firebase from 'firebase';


export interface AuthService{

    userSingup(email,password);
}   



 export interface AuthServiceimpl implements AuthService {
     
 
   
    signUpWithEmailAndPassword(email,password){     
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response:Firebase.User){
            console.log(response)
            let currentUser : Firebase.User = Firebase.auth().currentUser;
            console.log("Current user is", currentUser.email)
            console.log("Current dispaly name is" ,currentUser.displayName)
           currentUser.getIdToken(true).then(token: string) => {
               console.log("token is ", token)

           }, (error:any)=> {
               console.log(error)
           })
           console.log("we got google firebase auth response")
        }).catch(function(error){
            console.log(error.message)
        })
 
    }
    
     signInWithGoogle(){
         
     }
 
}