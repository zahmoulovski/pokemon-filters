import { videos } from "./data";

export function getVideo() {
  const videoList = videos;
  return videoList;
}

export function filterVideo(pokeType) {
  let filtredVideo = getVideo().filter(type => type.genre === pokeType);
  return filtredVideo;
}
