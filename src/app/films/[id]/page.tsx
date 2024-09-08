import Footer from "@/app/components/footer";
import Heading from "@/app/components/heading";
import Navbar from "@/app/components/navbar";
import VideoGridWithModal from "@/app/components/video-grid";
import YouTubePlaylistGallery from "@/app/components/youtube-playlist";

const PRE_WEDDING_PLAYLIST = [
  {
    id: 1,
    title: "TANMOY X SUCHISMITA | PRE WEDDING VARANASI",
    thumbnail:
      "https://i.ytimg.com/vi/Tl9aio7WOxE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU79b5SoC6e_aWbFcTiQdcJZOh0Q",
    description: "Tanmoy & Suchismita",
    youtubeId: "Tl9aio7WOxE",
  },
  {
    id: 2,
    title: "True Love Stories 💞❤ || Pre Wedding 2021",
    thumbnail:
      "https://i.ytimg.com/vi/fo1aK9He9-U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC19ELHZI1Ol7iM25bCVQOHoaOhcg",
    description: "Sanjeev & Pallabi",
    youtubeId: "fo1aK9He9-U",
  },
  {
    id: 3,
    title: "WINTER LOVE STORY 💓💕 || Pre Wedding 2021",
    thumbnail:
      "https://i.ytimg.com/vi/0A1HA9UDBHo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDhJgJ__lObLCBAmPsHUJkjbelwsw",
    description: "Pritam & Tanaya ",
    youtubeId: "0A1HA9UDBHo",
  },
  {
    id: 4,
    title: "TANMOY X SUCHISMITA | PRE WEDDING VARANASI",
    thumbnail:
      "https://i.ytimg.com/vi/Tl9aio7WOxE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU79b5SoC6e_aWbFcTiQdcJZOh0Q",
    description: "Tanmoy & Suchismita",
    youtubeId: "Tl9aio7WOxE",
  },
  {
    id: 5,
    title: "True Love Stories 💞❤ || Pre Wedding 2021",
    thumbnail:
      "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCubGT7fd2WcazvquL2Zd2eISaovA",
    description: "Sanjeev & Pallabi",
    youtubeId: "fo1aK9He9-U",
  },
  {
    id: 6,
    title: "WINTER LOVE STORY 💓💕 || Pre Wedding 2021",
    thumbnail:
      "https://i.ytimg.com/vi/5vsOv_bcnhs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBp1P6yhNNRC0mEe7ZF34JjMaW5qQ",
    description: "Pritam & Tanaya ",
    youtubeId: "0A1HA9UDBHo",
  },
  {
    id: 7,
    title: "WEDDING FILM 2023 | KIRAN & ...",
    thumbnail:
      "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCubGT7fd2WcazvquL2Zd2eISaovA",
    description: "Tanmoy & Suchismita",
    youtubeId: "0n7AWxYCj9I",
  },
  {
    id: 8,
    title:
      "Chuttamalle | Devara Second Single | NTR | Janhvi Kapoor | Anirudh Ravichander | Shilpa Rao | 27 Sep",
    thumbnail:
      "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCubGT7fd2WcazvquL2Zd2eISaovA",
    description: "Tanmoy & Suchismita",
    youtubeId: "5vsOv_bcnhs",
  },
  {
    id: 9,
    title: "DESTINATION WEDDING FILM J...",
    thumbnail:
      "https://i.ytimg.com/vi/5vsOv_bcnhs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBp1P6yhNNRC0mEe7ZF34JjMaW5qQ",
    description: "Tanmoy & Suchismita",
    youtubeId: "5vsOv_bcnhs",
  },
  {
    id: 10,
    title: "WEDDING FILM 2022 | SUKHMAN...",
    thumbnail:
      "https://i.ytimg.com/vi/5vsOv_bcnhs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBp1P6yhNNRC0mEe7ZF34JjMaW5qQ",
    description: "Tanmoy & Suchismita",
    youtubeId: "5vsOv_bcnhs",
  },
  {
    id: 11,
    title: "DESTINATION WEDDING FILM | ...",
    thumbnail:
      "https://i.ytimg.com/vi/5vsOv_bcnhs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBp1P6yhNNRC0mEe7ZF34JjMaW5qQ",
    description: "Tanmoy & Suchismita",
    youtubeId: "5vsOv_bcnhs",
  },
];

const PRE_WEDDING_VIDEOS = [
  {
    id: "1",
    title: "Wedding Highlight 2023",
    thumbnail:
      "https://i.ytimg.com/vi/Tl9aio7WOxE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU79b5SoC6e_aWbFcTiQdcJZOh0Q",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Beach Wedding",
    thumbnail:
      "https://i.ytimg.com/vi/fo1aK9He9-U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC19ELHZI1Ol7iM25bCVQOHoaOhcg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Mountain Elopement",
    thumbnail:
      "https://i.ytimg.com/vi/fo1aK9He9-U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC19ELHZI1Ol7iM25bCVQOHoaOhcg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Rustic Barn Ceremony",
    thumbnail:
      "https://i.ytimg.com/vi/Tl9aio7WOxE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU79b5SoC6e_aWbFcTiQdcJZOh0Q",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Urban Rooftop Wedding",
    thumbnail:
      "https://i.ytimg.com/vi/fo1aK9He9-U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC19ELHZI1Ol7iM25bCVQOHoaOhcg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Destination Wedding in Bali",
    thumbnail:
      "https://i.ytimg.com/vi/fo1aK9He9-U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC19ELHZI1Ol7iM25bCVQOHoaOhcg",
    youtubeId: "dQw4w9WgXcQ",
  },
];

const WEDDING_PLAYLIST = [
  {
    id: 1,
    title: "TANMOY X SUCHISMITA | PRE WEDDING VARANASI",
    thumbnail:
      "https://i.ytimg.com/vi/Tl9aio7WOxE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU79b5SoC6e_aWbFcTiQdcJZOh0Q",
    description: "Tanmoy & Suchismita",
    youtubeId: "Tl9aio7WOxE",
  },
  {
    id: 2,
    title: "True Love Stories 💞❤ || Pre Wedding 2021",
    thumbnail:
      "https://i.ytimg.com/vi/fo1aK9He9-U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC19ELHZI1Ol7iM25bCVQOHoaOhcg",
    description: "Sanjeev & Pallabi",
    youtubeId: "fo1aK9He9-U",
  },
  {
    id: 3,
    title: "WINTER LOVE STORY 💓💕 || Pre Wedding 2021",
    thumbnail:
      "https://i.ytimg.com/vi/0A1HA9UDBHo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDhJgJ__lObLCBAmPsHUJkjbelwsw",
    description: "Pritam & Tanaya ",
    youtubeId: "0A1HA9UDBHo",
  },
  {
    id: 4,
    title: "TANMOY X SUCHISMITA | PRE WEDDING VARANASI",
    thumbnail:
      "https://i.ytimg.com/vi/Tl9aio7WOxE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU79b5SoC6e_aWbFcTiQdcJZOh0Q",
    description: "Tanmoy & Suchismita",
    youtubeId: "Tl9aio7WOxE",
  },
  {
    id: 5,
    title: "True Love Stories 💞❤ || Pre Wedding 2021",
    thumbnail:
      "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCubGT7fd2WcazvquL2Zd2eISaovA",
    description: "Sanjeev & Pallabi",
    youtubeId: "fo1aK9He9-U",
  },
  {
    id: 6,
    title: "WINTER LOVE STORY 💓💕 || Pre Wedding 2021",
    thumbnail:
      "https://i.ytimg.com/vi/5vsOv_bcnhs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBp1P6yhNNRC0mEe7ZF34JjMaW5qQ",
    description: "Pritam & Tanaya ",
    youtubeId: "0A1HA9UDBHo",
  },
  {
    id: 7,
    title: "WEDDING FILM 2023 | KIRAN & ...",
    thumbnail:
      "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCubGT7fd2WcazvquL2Zd2eISaovA",
    description: "Tanmoy & Suchismita",
    youtubeId: "0n7AWxYCj9I",
  },
  {
    id: 8,
    title:
      "Chuttamalle | Devara Second Single | NTR | Janhvi Kapoor | Anirudh Ravichander | Shilpa Rao | 27 Sep",
    thumbnail:
      "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCubGT7fd2WcazvquL2Zd2eISaovA",
    description: "Tanmoy & Suchismita",
    youtubeId: "5vsOv_bcnhs",
  },
  {
    id: 9,
    title: "DESTINATION WEDDING FILM J...",
    thumbnail:
      "https://i.ytimg.com/vi/5vsOv_bcnhs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBp1P6yhNNRC0mEe7ZF34JjMaW5qQ",
    description: "Tanmoy & Suchismita",
    youtubeId: "5vsOv_bcnhs",
  },
  {
    id: 10,
    title: "WEDDING FILM 2022 | SUKHMAN...",
    thumbnail:
      "https://i.ytimg.com/vi/5vsOv_bcnhs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBp1P6yhNNRC0mEe7ZF34JjMaW5qQ",
    description: "Tanmoy & Suchismita",
    youtubeId: "5vsOv_bcnhs",
  },
  {
    id: 11,
    title: "DESTINATION WEDDING FILM | ...",
    thumbnail:
      "https://i.ytimg.com/vi/5vsOv_bcnhs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBp1P6yhNNRC0mEe7ZF34JjMaW5qQ",
    description: "Tanmoy & Suchismita",
    youtubeId: "5vsOv_bcnhs",
  },
];

const WEDDING_VIDEOS = [
  {
    id: "1",
    thumbnail:
      "https://i.ytimg.com/vi/Kq_Tc_kjRb4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgUxG9hZepw1pGTQIBKpYSudFtxw",
    youtubeId: "Kq_Tc_kjRb4",
  },
  {
    id: "2",
    thumbnail:
      "https://i.ytimg.com/an_webp/e3zM984QLfM/mqdefault_6s.webp?du=3000&sqp=CMG407YG&rs=AOn4CLC5aj8UjRJjJvSOMdVeKdh-G2xosg",
    youtubeId: "e3zM984QLfM",
  },
  {
    id: "3",
    thumbnail:
      "https://i.ytimg.com/an_webp/Onp4_8L31po/mqdefault_6s.webp?du=3000&sqp=CLLG07YG&rs=AOn4CLBUpbyzfpXcalozQ6f-Sq5Y_YsOBA",
    youtubeId: "Onp4_8L31po",
  },
  {
    id: "4",
    thumbnail:
      "https://i.ytimg.com/vi/Tl9aio7WOxE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU79b5SoC6e_aWbFcTiQdcJZOh0Q",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Urban Rooftop Wedding",
    thumbnail:
      "https://i.ytimg.com/vi/fo1aK9He9-U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC19ELHZI1Ol7iM25bCVQOHoaOhcg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Destination Wedding in Bali",
    thumbnail:
      "https://i.ytimg.com/vi/fo1aK9He9-U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC19ELHZI1Ol7iM25bCVQOHoaOhcg",
    youtubeId: "dQw4w9WgXcQ",
  },
];

const FILMS_MAP = new Map();

FILMS_MAP.set("wedding", {
  heading: "Wedding Films",
  videos: WEDDING_VIDEOS,
  playlist: WEDDING_PLAYLIST,
});

FILMS_MAP.set("pre-wedding", {
  heading: "Pre-Wedding Films",
  videos: PRE_WEDDING_VIDEOS,
  playlist: PRE_WEDDING_PLAYLIST,
});

export default function Films({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <>
      <Navbar selectedLabel="Films" />
      <div className="h-40" />
      <Heading title={FILMS_MAP.get(params.id)?.heading} />
      <VideoGridWithModal videos={FILMS_MAP.get(params.id)?.videos} />
      <YouTubePlaylistGallery playlist={FILMS_MAP.get(params.id)?.playlist} />
      <div className="h-16" />
    </>
  );
}
