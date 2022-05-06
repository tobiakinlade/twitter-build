import SideBarRow from './SideBarRow'
import {
  HomeIcon,
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  MailIcon,
  HashtagIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className="col-span-2 flex-col items-center px-4 md:items-start">
      <img
        src="https://links.papareact.com/drq"
        alt=""
        className="m-3 h-10 w-10 rounded-full"
      />
      <SideBarRow title="Home" Icon={HomeIcon} />
      <SideBarRow title="Explore" Icon={HashtagIcon} />
      <SideBarRow title="Notifications" Icon={BellIcon} />
      <SideBarRow title="Messages" Icon={MailIcon} />
      <SideBarRow title="Bookmarks" Icon={BookmarkIcon} />
      <SideBarRow title="Lists" Icon={CollectionIcon} />
      <SideBarRow title="Sign in" Icon={UserIcon} />
      <SideBarRow title="More" Icon={DotsCircleHorizontalIcon} />
    </div>
  )
}

export default Sidebar
