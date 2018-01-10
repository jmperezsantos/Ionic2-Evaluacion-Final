export class Session {

    user:any;

    private constructor(){

    }

    static session:Session;
    
    static getInstance():Session {

        if (this.session == null){
            this.session = new Session();
        }

        return this.session;

    }

}