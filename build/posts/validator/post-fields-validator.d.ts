import joi = require('@hapi/joi');
declare class PostFieldsValidator {
    static validatePublicationFromEntity(objectToValidate: any, entityName: string): joi.ValidationResult<any>;
    private static validatePublicationFromUser;
    private static validatePublicationFromOrganization;
}
export = PostFieldsValidator;
