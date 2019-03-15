# Examples


## Airdrop interface

```
post: {
  // ... all properties of publication ...
  started_at: string, // UTC-formatted datetime
  finished_at: string, // UTC-formatted datetime
  stats: { // there are two kinds of stats - current and total
    members: number, // that are ready for receiving airdrop?
    last_img_src: [ // ?
      string,
      string,
    ],
    tokens_left: [ // left and total together?
      {
        amount: number,
        symbol: string,
        total: number,
      },
      {
        amount: number,
        symbol: string,
        total: number,
      },
    ],
  },
    action_button_title: 'Join GitHub',
    action_button_url: '{{big link to github auth}}'
}

stats: { // myself airdrop state?
  github_score: number,
  airdrop_status: string, // ?  better to be number
  tokens: [ // tokens to receive or already received tokens?
    {
      amount: number,
      symbol: string,
    },
    {
      amount: number,
      symbol: string,
    },
  ],
}

condition: { // where to place
  auth_github: boolean,
  auth_myself: boolean,
  following_org: boolean,
}
```

## Example of stats response

```
{
    // ========== Users ============
    [USERS_PERSON__NUMBER]: {
        event_type: [USERS_PERSON__NUMBER],
        value: 151,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },
    [USERS_PERSON__DELTA_PT24H]: {
        event_type: [USERS_PERSON__DELTA_PT24H],
        value: 80,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-03-01T14:07:25Z'
    },
    
    // ========= Organizations (Orgs) ============
    [ORGS_PERSON__NUMBER]: {
        event_type: [ORGS_PERSON__NUMBER],
        value: 151,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },
    [ORGS_PERSON__DELTA_PT24H]: {
        event_type: [ORGS_PERSON__DELTA_PT24H],
        value: 80,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-03-01T14:07:25Z'
    },
    
    // ========= Tags ============
    [TAGS_PERSON__NUMBER]: {
        event_type: [TAGS_PERSON__NUMBER],
        value: 151,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },
    [TAGS_PERSON__DELTA_PT24H]: {
        event_type: [TAGS_PERSON__DELTA_PT24H],
        value: 80,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-03-01T14:07:25Z'
    },

    // ========= Comments ============
    [COMMENTS_PARENT__NUMBER]: {
        event_type: [COMMENTS_PARENT__NUMBER],
        value: 151,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },
    [COMMENTS_PARENT__DELTA_PT24H]: {
        event_type: [COMMENTS_PARENT__DELTA_PT24H],
        value: 80,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-03-01T14:07:25Z'
    },
    
    // Replies
    [COMMENTS_REPLY__NUMBER]: {
        event_type: [COMMENTS_REPLY__NUMBER],
        value: 151,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },
    [COMMENTS_REPLY__DELTA_PT24H]: {
        event_type: [COMMENTS_REPLY__DELTA_PT24H],
        value: 80,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-03-01T14:07:25Z'
    },
    
    // ========== Posts ===============
    [POSTS_MEDIA__NUMBER]: {
        event_type: [POSTS_MEDIA__NUMBER],
        value: 72,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },
    [POSTS_MEDIA__DELTA_PT24H]: {
        event_type: [POSTS_MEDIA__DELTA_PT24H],
        value: 4,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-02-27T11:07:25Z'
    },

    [POSTS_DIRECT__NUMBER]: {
        event_type: [POSTS_DIRECT__NUMBER],
        value: 31,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },
    [POSTS_DIRECT__DELTA_PT24H]: {
        event_type: [POSTS_DIRECT__DELTA_PT24H],
        value: 1,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-02-27T11:07:25Z'
    },

    // ======= Reposts ===========
    [POSTS_REPOST_MEDIA__NUMBER]: {
        event_type: [POSTS_REPOST_MEDIA__NUMBER],
        value: 8,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },
    [POSTS_REPOST_MEDIA__DELTA_PT24H]: {
        event_type: [POSTS_REPOST_MEDIA__DELTA_PT24H],
        value: 5,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-02-27T11:07:25Z'
    },
    
    [POSTS_REPOST_DIRECT__NUMBER]: {
        event_type: [POSTS_REPOST_DIRECT__NUMBER],
        value: 8,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },
    [POSTS_REPOST_DIRECT__DELTA_PT24H]: {
        event_type: [POSTS_REPOST_DIRECT__DELTA_PT24H],
        value: 5,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-02-27T11:07:25Z'
    },
    
    // Upvotes
    [ACITVITIES_VOTE_UPVOTE__NUMBER]: {
        event_type: [ACITVITIES_VOTE_UPVOTE__NUMBER],
        value: 8,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },            
    [ACITVITIES_VOTE_UPVOTE__DELTA_PT24H]: {
        event_type: [ACITVITIES_VOTE_UPVOTE__DELTA_PT24H],
        value: 5,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-02-27T11:07:25Z'
    },
    
    // Downvotes
    [ACITVITIES_VOTE_DOWNVOTE__NUMBER]: {
        event_type: [ACITVITIES_VOTE_DOWNVOTE__NUMBER],
        value: 8,
        recalc_interval: 'PT1H'
        created_at: '2019-02-27T11:07:25Z'
    },            
    [ACITVITIES_VOTE_DOWNVOTE__DELTA_PT24H]: {
        event_type: [ACITVITIES_VOTE_DOWNVOTE__DELTA_PT24H],
        value: 5,
        recalc_interval: 'PT1H',
        window_interval: 'PT24H',
        created_at: '2019-02-27T11:07:25Z'
    },
}
```