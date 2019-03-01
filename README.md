# ucom.libs.common
Methods, interfaces, classes which are used both by frontend and backend application


## Examples:



### Example of stats response:

* кол-во профилей
* кол-во комьюнити, публикаций, постов, тегов
* кол-во комментов/реплаев/тотал
* кол-во оценов - лайк дизлайк тотал
* шеры - посты/публикации/тотал

```
{
    users: { // Entity name. Level #1
        {
            persons: { // Entity category. Level #2
            {
                    100: {
                        event_type: 100, // TODO - create dictionary beforehand
                        description: 'Current number of users',
                        value: 151,
                        recalc_interval: 'PT1H'
                        created_at: '2019-02-27T11:07:25Z'
                    },
                    101: {
                        event_type: 101, // TODO - create dictionary beforehand
                        value: 80,
                        recalc_interval: 'PT1H',
                        window_interval: 'PT24H',
                        description: 'Current delta of number of users',
                        created_at: '2019-03-01T14:07:25Z'
                    },
                },
            },
        },
    },
    posts: { // Entity name. Level #1
        media_posts: { // Entity category. Level #2
                // Same structure as for users.    
        }
        direct_posts: { // Entity category. Level #2
            // same as for media posts
        },
        reposts: {
            500: {
                // stats for meda posts
            },
            501: {
                // stats for direct posts
            },
            502: {
                // total amount
            },
        },
        // other first-level types
    },
    activity: {
        votes: {
            600: {
                // upvotes
            },
        }, 
    },
}
```