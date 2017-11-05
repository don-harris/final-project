export const NEXT_VIDEO = 'NEXT_VIDEO'

export const nextVideo = (currentVideo, remainingVideos) => {
  return {
    type: NEXT_VIDEO,
    currentVideo: currentVideo,
    remainingVideos: remainingVideos
  }
}
