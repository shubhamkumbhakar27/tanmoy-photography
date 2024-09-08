"use client";
import React, { useState } from "react";
import Image from "next/image";

const PlaylistItem = ({
  title,
  thumbnail,
  description,
  isActive,
  onClick,
}: any) => (
  <div
    className={`flex items-center p-2 gap-2 cursor-pointer hover:bg-gray-100 ${
      isActive ? "bg-gray-200" : ""
    }`}
    onClick={onClick}
  >
    <div className="w-1/4">
      <Image
        src={thumbnail}
        alt={title}
        width={120}
        height={68}
        className="object-cover mr-4"
      />
    </div>
    <div className="w-3/4">
      <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
        {title}
      </h3>
      <span className="text-xs text-gray-600">{description}</span>
    </div>
  </div>
);

const YouTubePlaylistGallery = ({ playlist }: any) => {
  const [activeVideo, setActiveVideo] = useState(playlist[0]);
  const [allowAutoplay, setAllowAutoplay] = useState(false);

  if (!playlist) return null;
  return (
    <>
      <div className="container mx-auto px-4 py-8 shadow-lg">
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
            <h3 className="text-xl font-semibold p-4 border-b">
              Playlist Videos
            </h3>
            <div className="overflow-y-auto max-h-[400px]">
              {playlist.map((video: any) => (
                <PlaylistItem
                  key={video.id}
                  {...video}
                  isActive={video.id === activeVideo.id}
                  onClick={() => {
                    setActiveVideo(video);
                    setAllowAutoplay(true);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="md:w-2/3 h-[250px] md:h-[420px] my-auto">
            <div className="aspect-16/9 h-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}${
                  allowAutoplay ? "?autoplay=1" : ""
                }`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubePlaylistGallery;
