module.exports = {
  Stats: {
    Dictionary: {
      ParamTypes: require('./build/stats/dictionary/param-types-dictionary')
    }
  },
  Governance: {
    Dictionary: {
      BlockchainNodesTypes: require('./build/governance/dictionary/blockchain-nodes-types-dictionary')
    }
  },
  Airdrop: {
    Dictionary: {
      AirdropStatuses: require('./build/airdrop/dictionary/airdrop-statuses'),
      AirdropUserPersonalStatuses: require('./build/airdrop/dictionary/airdrop-user-personal-statuses')
    }
  },
  Events: {
    Dictionary: {
      EventsIds: require('./build/events/dictionary/events-ids-dictionary'), // deprecated, use a direct import
    }
  },
  Common: {
    Dictionary: {
      CommonHeaders:    require('./build/common/dictionary/common-headers'),
      EntityNames:      require('./build/common/dictionary/entity-names'), // deprecated, use a direct import
    },
  },
  InteractionTypesDictionary: require('./build/common/dictionary/interaction-types-dictionary'),
  ContentTypesDictionary: require('./build/common/dictionary/content-types-dictionary'),
  EntityNames: require('./build/common/dictionary/entity-names'),
  EventsIdsDictionary: require('./build/events/dictionary/events-ids-dictionary'),
  Posts: {
    Dictionary: {
      PostTypes: require('./build/posts/dictionary/post-types'),
    },
    Validator: {
      PostFieldsValidator: require('./build/posts/validator/post-fields-validator'),
    },
  },
};
