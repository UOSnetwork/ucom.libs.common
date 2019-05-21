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
  Common: {
    Dictionary: {
      CommonHeaders: require('./build/common/dictionary/common-headers')
    }
  },
};
