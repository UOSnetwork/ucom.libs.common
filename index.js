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
      EventsIds: require('./build/events/dictionary/events-ids-dictionary'),
    }
  },
  Common: {
    Dictionary: {
      CommonHeaders:    require('./build/common/dictionary/common-headers'),
      EntityNames:      require('./build/common/dictionary/entity-names'),
    },
  },
  InteractionTypesDictionary: require('./build/common/dictionary/interaction-types-dictionary').InteractionTypesDictionary,
  ContentTypesDictionary: require('./build/common/dictionary/content-types-dictionary').ContentTypesDictionary,
  Posts: {
    Dictionary: {
      PostTypes: require('./build/posts/dictionary/post-types'),
    },
    Validator: {
      PostFieldsValidator: require('./build/posts/validator/post-fields-validator'),
    },
  },
};
