export default {
    name: 'aboutMe',
    title: 'AboutMe',
    type: 'document',
    fields: [
        {
            name: 'intro',
            type: 'string'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        },
        {
            name: 'skills',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'skill' }]
            }]
        }
    ]
}