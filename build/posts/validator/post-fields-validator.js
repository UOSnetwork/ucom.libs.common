"use strict";
const common_regex_1 = require("../../common/validator/common-regex");
const entity_names_1 = require("../../common/dictionary/entity-names");
const joi = require("@hapi/joi");
const commonInputFieldsSchema = {
    blockchain_id: joi.string().required(),
    title: joi.string().required(),
    leading_text: joi.string().required().allow([null, '']),
    description: joi.string().required(),
    entity_name_for: joi.string().required().valid([entity_names_1.USERS, entity_names_1.ORGANIZATIONS]),
    entity_images: joi.object().required(),
    entity_tags: joi.array().required().items(joi.string().min(1)),
    created_at: joi.string().required().regex(common_regex_1.DATETIME_STRING_UTC_REGEX),
    updated_at: joi.string().required().regex(common_regex_1.DATETIME_STRING_UTC_REGEX),
};
const blockchainContentFieldsSchema = Object.assign(Object.assign({}, commonInputFieldsSchema), { author_account_name: joi.string().length(12).required(), entity_blockchain_id_for: joi.string().required() });
const blockchainContentFieldsFromOrganizationSchema = Object.assign(Object.assign({}, blockchainContentFieldsSchema), { organization_blockchain_id: joi.string().required() });
const commonOptions = {
    abortEarly: false,
    allowUnknown: false,
};
class PostFieldsValidator {
    static validatePublicationFromEntity(objectToValidate, entityName) {
        switch (entityName) {
            case entity_names_1.USERS:
                return this.validatePublicationFromUser(objectToValidate);
            case entity_names_1.ORGANIZATIONS:
                return this.validatePublicationFromOrganization(objectToValidate);
            default:
                throw new TypeError(`Unsupported entityName: ${entityName}`);
        }
    }
    static validatePublicationFromUser(objectToValidate) {
        const schema = joi.object()
            .keys(blockchainContentFieldsSchema)
            .options(commonOptions);
        return schema.validate(objectToValidate);
    }
    static validatePublicationFromOrganization(objectToValidate) {
        const schema = joi.object()
            .keys(blockchainContentFieldsFromOrganizationSchema)
            .options(commonOptions);
        return schema.validate(objectToValidate);
    }
}
module.exports = PostFieldsValidator;
