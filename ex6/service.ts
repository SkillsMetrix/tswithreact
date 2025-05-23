export interface LoggerService{
    log(message:string):void
}

export class ConsoleLogger implements LoggerService{
    log(message:string):void{
        console.log("[LOG]",message);
        
    }
}
export interface EmailService{
    sendEmail(to:string,content:string):void;
}
export class SimpleEmailService implements EmailService {
    sendEmail(to: string, content: string): void {
        console.log(`Email sent to ${to}: ${content}`);
        
    }
}