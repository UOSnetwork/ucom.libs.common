# ucom.libs.common
Methods, interfaces, classes which are used both by frontend and backend application


## Examples:

### Example of stats response:

```
{
    users: { // Entity name. Level #1
        {
            person: { // Entity category. Level #2
            {
                    [USERS_PERSON__NUMBER_24_1]: {
                        event_type: [USERS_PERSON__NUMBER_24_1],
                        value: 151,
                        recalc_interval: 'PT1H'
                        created_at: '2019-02-27T11:07:25Z'
                    },
                    [USERS_PERSON__DELTA_24_1]: {
                        event_type: [USERS_PERSON__DELTA_24_1],
                        value: 80,
                        recalc_interval: 'PT1H',
                        window_interval: 'PT24H',
                        created_at: '2019-03-01T14:07:25Z'
                    },
                },
            },
        },
    },
    orgs: { // Entity name. Level #1
        {
            person: { // Entity category. Level #2
            {
                    [ORGS_PERSON__NUMBER_24_1]: {
                        event_type: [ORGS_PERSON__NUMBER_24_1],
                        value: 151,
                        recalc_interval: 'PT1H'
                        created_at: '2019-02-27T11:07:25Z'
                    },
                    [ORGS_PERSON__DELTA_24_1]: {
                        event_type: [ORGS_PERSON__DELTA_24_1],
                        value: 80,
                        recalc_interval: 'PT1H',
                        window_interval: 'PT24H',
                        created_at: '2019-03-01T14:07:25Z'
                    },
                },
            },
        },
    },
    tags: { // Entity name. Level #1
        {
            person: { // Entity category. Level #2
            {
                    [TAGS_PERSON__NUMBER_24_1]: {
                        event_type: [TAGS_PERSON__NUMBER_24_1],
                        value: 151,
                        recalc_interval: 'PT1H'
                        created_at: '2019-02-27T11:07:25Z'
                    },
                    [TAGS_PERSON__DELTA_24_1]: {
                        event_type: [TAGS_PERSON__DELTA_24_1],
                        value: 80,
                        recalc_interval: 'PT1H',
                        window_interval: 'PT24H',
                        created_at: '2019-03-01T14:07:25Z'
                    },
                },
            },
        },
    },
    comments: { // Entity name. Level #1
        {
            parent: { // Entity category. Level #2
            {
                    [COMMENTS_PARENT__NUMBER_24_1]: {
                        event_type: [COMMENTS_PARENT__NUMBER_24_1],
                        value: 151,
                        recalc_interval: 'PT1H'
                        created_at: '2019-02-27T11:07:25Z'
                    },
                    [COMMENTS_PARENT__DELTA_24_1]: {
                        event_type: [COMMENTS_PARENT__DELTA_24_1],
                        value: 80,
                        recalc_interval: 'PT1H',
                        window_interval: 'PT24H',
                        created_at: '2019-03-01T14:07:25Z'
                    },
                },
            },
            reply: { // Entity category. Level #2
            {
                    [COMMENTS_REPLY__NUMBER_24_1]: {
                        event_type: [COMMENTS_REPLY__NUMBER_24_1],
                        value: 151,
                        recalc_interval: 'PT1H'
                        created_at: '2019-02-27T11:07:25Z'
                    },
                    [COMMENTS_REPLY__DELTA_24_1]: {
                        event_type: [COMMENTS_REPLY__DELTA_24_1],
                        value: 80,
                        recalc_interval: 'PT1H',
                        window_interval: 'PT24H',
                        created_at: '2019-03-01T14:07:25Z'
                    },
                },
            },
        },
    },
    posts: { // Entity name. Level #1
        media: { // Entity category. Level #2
            [POSTS_MEDIA__NUMBER_24_1]: {
                event_type: [POSTS_MEDIA__NUMBER_24_1],
                value: 72,
                recalc_interval: 'PT1H'
                created_at: '2019-02-27T11:07:25Z'
            },
            [POSTS_MEDIA__DELTA_24_1]: {
                event_type: [POSTS_MEDIA__DELTA_24_1],
                value: 4,
                recalc_interval: 'PT1H',
                window_interval: 'PT24H',
                created_at: '2019-02-27T11:07:25Z'
            },
        }
        direct: { // Entity category. Level #2
            [POSTS_DIRECT__NUMBER]: {
                event_type: [POSTS_DIRECT__NUMBER],
                value: 31,
                recalc_interval: 'PT1H'
                created_at: '2019-02-27T11:07:25Z'
            },
            [POSTS_DIRECT__DELTA]: {
                event_type: [POSTS_DIRECT__DELTA],
                value: 1,
                recalc_interval: 'PT1H',
                window_interval: 'PT24H',
                created_at: '2019-02-27T11:07:25Z'
            },
        }
        repost: { // Entity category. Level #2
            [POSTS_REPOST_MEDIA__NUMBER_24]: {
                event_type: [POSTS_REPOSTMEDIA__NUMBER_24],
                value: 8,
                recalc_interval: 'PT1H'
                created_at: '2019-02-27T11:07:25Z'
            },
            [POSTS_REPOST__MEDIA__DELTA_24]: {
                event_type: [POSTS_REPOST__MEDIA__DELTA_24],
                value: 5,
                recalc_interval: 'PT1H',
                window_interval: 'PT24H',
                created_at: '2019-02-27T11:07:25Z'
            },
            [POSTS_REPOST-DIRECT__NUMBER_24]: {
                event_type: [POSTS_REPOSTDIRECT__NUMBER_24],
                value: 8,
                recalc_interval: 'PT1H'
                created_at: '2019-02-27T11:07:25Z'
            },
            [POSTS_REPOSTDIRECT__DELTA_24]: {
                event_type: [POSTS_REPOSTDIRECT__DELTA_24],
                value: 5,
                recalc_interval: 'PT1H',
                window_interval: 'PT24H',
                created_at: '2019-02-27T11:07:25Z'
            },
        }
    },
    activities: {
        vote: {
            [ACITVITIES_VOTE__UPVOTE__NUMBER_24_1]: {
                event_type: [ACITVITIES_VOTE__UPVOTE__NUMBER_24_1],
                value: 8,
                recalc_interval: 'PT1H'
                created_at: '2019-02-27T11:07:25Z'
            },            
            [ACITVITY_VOTE_UPVOTE__DELTA_24_1]: {
                event_type: [ACITVITY_VOTE__UPVOTE__DELTA_24_1],
                value: 5,
                recalc_interval: 'PT1H',
                window_interval: 'PT24H',
                created_at: '2019-02-27T11:07:25Z'
            },
            [ACITVITY_VOTE__DOWNVOTE__NUMBER_24]: {
                event_type: [ACITVITY_VOTE__DOWNVOTE__NUMBER_24],
                value: 5,
                recalc_interval: 'PT1H',
                window_interval: 'PT24H',
                created_at: '2019-02-27T11:07:25Z'
            },
            [ACITVITY_VOTE__DOWNVOTE__DELTA_24]: {
                event_type: [ACITVITY_VOTE__DOWNVOTE__DELTA_24],
                value: 5,
                recalc_interval: 'PT1H',
                window_interval: 'PT24H',
                created_at: '2019-02-27T11:07:25Z'
            },
        },
    },
}
```