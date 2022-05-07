import { RefreshIcon } from '@heroicons/react/outline'

import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from '../components/Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}
function Feed({ tweets: tweetProps }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetProps)
  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...')
    const tweets = await fetchTweets()
    setTweets(tweets)
    toast.success('Feed updated', { id: refreshToast })
  }
  return (
    <div className="col-span-7 max-h-screen overflow-scroll border-x scrollbar-hide  lg:col-span-5">
      <div
        className="flex
      items-center justify-between "
      >
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>

      <div>
        <TweetBox setTweets={setTweets} />
      </div>

      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
