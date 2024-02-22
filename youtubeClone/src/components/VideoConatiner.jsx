import VideoCard from './VideoCard'
import { Sidebar } from './SideBar'

const video = [
  {
    key: 1,
    title: 'Video Title 1',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 1',
  },
  {
    key: 2,
    title: 'Video Title 2',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 2',
  },
  {
    key: 3,
    title: 'Video Title 3',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 3',
  },
  {
    key: 4,
    title: 'Video Title 4',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 4',
  },
  {
    key: 5,
    title: 'Video Title 5',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 5',
  },
  {
    key: 6,
    title: 'Video Title 6',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 6',
  },
  {
    key: 7,
    title: 'Video Title 7',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 7',
  },
  {
    key: 8,
    title: 'Video Title 8',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 8',
  },
  {
    key: 9,
    title: 'Video Title 9',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 9',
  },
  {
    key: 10,
    title: 'Video Title 10',
    views: '120k',
    timestamp: '5 mo ago',
    image: '/thumnail.jpeg',
    logo: '/logo.jpeg',
    channelName: 'Channel Name 10',
  },
]

function VideoContainer() {
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className=" col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {video.map((video) => {
            return (
              <div key={video.key}>
                <VideoCard
                  title={video.title}
                  channelName={video.channelName}
                  views={video.views}
                  timestamp={video.timestamp}
                  image={video.image}
                  logo={video.logo}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default VideoContainer
