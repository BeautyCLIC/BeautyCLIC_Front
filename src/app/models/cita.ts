//citas segun trabajadores que hagan ese servicio
export interface Cita {
    _id: string;
    anyo: number;
    mes: number;
    dia: number;
    hora: number;
    minuto: number; 

    servicio: string;
    duracion: number;
    trabajador: string; 
}
//se envia desde la pagina calendario para guardar la cita
// POST { año, mes, dia, hora, minutos, servicio, trabajador, cliente }
export class NuevaCita{
    
    anyo: number;
    mes: number;
    dia: number;
    hora: number;
    minuto: number;
    servicio: string;
    duracion: number;
    trabajador: string;
    cliente: string;
    constructor(anyo: number,mes: number,dia: number,hora: number,minuto: number,servicio: string,duracion: number,trabajador: string, cliente: string) {
        this.anyo           =anyo;
        this.mes            =mes;
        this.dia            =dia;
        this.hora           =hora;
        this.minuto         =minuto;
        this.servicio       =servicio;
        this.duracion       =duracion;
        this.trabajador     =trabajador;
        this.cliente        =cliente;
    }
}
 