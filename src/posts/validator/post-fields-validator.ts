import { DATETIME_STRING_UTC_REGEX } from '../../common/validator/common-regex';
import { ORGANIZATIONS, USERS } from '../../common/dictionary/entity-names';

import joi =  require('@hapi/joi');

const commonInputFieldsSchema = {
  blockchain_id:      joi.string().required(),

  title:              joi.string().required(),
  leading_text:       joi.string().required().allow([null, '']),
  description:        joi.string().required(),

  entity_name_for:    joi.string().required().valid([USERS, ORGANIZATIONS]),

  entity_images:      joi.object().required(),
  entity_tags:        joi.array().required().items(joi.string().min(1)),

  created_at:         joi.string().required().regex(DATETIME_STRING_UTC_REGEX),
  updated_at:         joi.string().required().regex(DATETIME_STRING_UTC_REGEX),
};

const blockchainContentFieldsSchema = {
  ...commonInputFieldsSchema,
  author_account_name:      joi.string().length(12).required(),
  entity_blockchain_id_for: joi.string().required(),
};

const blockchainContentFieldsFromOrganizationSchema = {
  ...blockchainContentFieldsSchema,
  organization_blockchain_id: joi.string().required(),
};

const commonOptions = {
  abortEarly:   false,
  allowUnknown: false,
};

class PostFieldsValidator {
  public static validatePublicationFromEntity(objectToValidate: any, entityName: string) {
    switch (entityName) {
      case USERS:
        return this.validatePublicationFromUser(objectToValidate);
      case ORGANIZATIONS:
        return this.validatePublicationFromOrganization(objectToValidate);
      default:
        throw new TypeError(`Unsupported entityName: ${entityName}`);
    }
  }

  private static validatePublicationFromUser(objectToValidate: any) {
    const schema = joi.object()
      .keys(blockchainContentFieldsSchema)
      .options(commonOptions);

    return schema.validate(objectToValidate);
  }

  private static validatePublicationFromOrganization(objectToValidate: any) {
    const schema = joi.object()
      .keys(blockchainContentFieldsFromOrganizationSchema)
      .options(commonOptions);

    return schema.validate(objectToValidate);
  }
}

export = PostFieldsValidator;
