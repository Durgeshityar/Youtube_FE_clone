function VideoCard({ title, views, channelName, timestamp, image, logo }) {
  return (
    <>
      <div className="p-3">
        <img className="rounded-xl" src={image}></img>
        <div className=" grid grid-cols-12 pt-2">
          <div className="col-span-2">
            <img className="rounded-full w-20 h-20" src={logo}></img>
          </div>
          <div className="col-span-10 ">
            <div className=" pl-4"> {title}</div>
            <div className=" pl-4 text-gray-600 text-sm">{channelName}</div>
            <div className=" pl-4 text-gray-600 text-sm ">
              {views} | {timestamp}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCard
