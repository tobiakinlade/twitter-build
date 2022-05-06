export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },

    {
      name: 'blockTweet',
      title: 'Block Tweet',
      type: 'boolean',
      description: 'Admin controls toggle tweet if deemed inappropriate',
    },
    {
      name: 'username',
      title: 'USERNAME',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tweet image',
      type: 'string',
    },
  ],
}
