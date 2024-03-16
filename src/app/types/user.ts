
type errorsValidation = {
    field : string, 
    Message : string 
}

type successResponse = {
    msg: string;
}

export interface IerrorValidationCamps{
    error: {
        status : number,
        errors : errorsValidation
    }
}

export interface IresponseSuccess {
        status : number,
        success : successResponse
}