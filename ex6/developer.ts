import { Employee } from "./employee";
import { LoggerService } from "./service";



export class Developer implements Employee {
    constructor(public name:string,private logger:LoggerService){}
    role="Developer"
    performDuties(): void {
        this.logger.log(`${this.name} is writing code`)
    }
}