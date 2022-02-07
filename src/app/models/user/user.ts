export class User {
    constructor(
        public id?: number,
        public nombre?: string,
        public apellido?: string,
        public password?: string,
        public email?: string,
        public fechaCreacion?: Date,        
        public fechaLoguo?: Date,
        public state?: boolean,
        public roles?: any,
        public datosEntrega?: any
    ) {

    }
}
