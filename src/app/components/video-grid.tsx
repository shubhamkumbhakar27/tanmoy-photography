"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

const VideoThumbnail = ({ title, youtubeId, onPlay }: any) => (
  <div className="relative group cursor-pointer aspect-[19/9]" onClick={onPlay}>
    <Image
      src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="shadow-lg"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
      <div className="bg-black bg-opacity-10 border border-gray-300 rounded-full p-4">
        <Play className="text-gray-200" size={32} />
      </div>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-75"
        onClick={onClose}
      ></div>
      <div className="z-10 rounded-lg max-w-6xl w-full mx-4">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const VideoGridWithModal = ({ videos }: any) => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const openModal = (video: any) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {videos.map((video: any) => (
          <VideoThumbnail
            key={video.id}
            youtubeId={video.youtubeId}
            onPlay={() => openModal(video)}
          />
        ))}
      </div>
      <Modal isOpen={!!selectedVideo} onClose={closeModal}>
        {selectedVideo && (
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&controls=0`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default VideoGridWithModal;
