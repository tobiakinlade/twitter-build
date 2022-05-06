export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    { name: 'comment', title: 'Comment', type: 'string' },
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference to the Tweet the comment is associated to:',
      type: 'reference',
      to: {
        type: 'tweet',
      },
    },
  ],
}
