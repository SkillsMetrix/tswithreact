import { Developer } from "./developer";
import { createInstance } from "./factory";
import { ConsoleLogger, SimpleEmailService } from "./service";




const logger= new ConsoleLogger()
const emailService=new SimpleEmailService()

const dev= createInstance(Developer,"Alice",logger)

dev.performDuties()