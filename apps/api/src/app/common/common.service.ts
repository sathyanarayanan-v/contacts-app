import { Injectable } from '@nestjs/common';
import {IErrorMessage} from '@contacts-app/api-interfaces'

@Injectable()
export class CommonService {
    constructor(){}
    sendErrorMessage = (message: string, error?: boolean): IErrorMessage => ({
        error,
        message
      });
}
