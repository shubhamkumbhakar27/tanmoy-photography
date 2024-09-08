import Heading from "@/app/components/heading";
import Navbar from "@/app/components/navbar";
import VideoGridWithModal from "@/app/components/video-grid";
import YouTubePlaylistGallery from "@/app/components/youtube-playlist";

const PRE_WEDDING_PLAYLIST = [
  {
    id: 1,
    title: "TANMOY X SUCHISMITA | PRE WEDDING VARANASI",
    description: "Tanmoy & Suchismita",
    youtubeId: "Tl9aio7WOxE",
  },
  {
    id: 2,
    title: "True Love Stories 💞❤ || Pre Wedding 2021",
    description: "Sanjeev & Pallabi",
    youtubeId: "fo1aK9He9-U",
  },
  {
    id: 3,
    title: "WINTER LOVE STORY 💓💕 || Pre Wedding 2021",
    description: "Pritam & Tanaya ",
    youtubeId: "0A1HA9UDBHo",
  },
  {
    id: 4,
    title: "ভালোবাসার শহর | Pre wedding Kolkata",
    description: "Koustab & Koyel",
    youtubeId: "KY3Mr7jdThw",
  },
  {
    id: 5,
    title: "A MOMENT OF LOVE 💕 | PRE WEDDING 2020",
    description: "Swapnil & Chitra",
    youtubeId: "h7pVhOSKkhg",
  },
  {
    id: 6,
    title: "Pre Wedding Kolkata 2019",
    description: "Prerana & Prabal",
    youtubeId: "rfKvEeMvoQQ",
  },
  {
    id: 7,
    title: "Pre Wedding Kolkata 2021",
    description: "Suman & Moumita",
    youtubeId: "r6mnS-f-9og",
  },
];

const PRE_WEDDING_VIDEOS = [
  {
    id: "2",
    title: "A MOMENT OF LOVE 💕",
    youtubeId: "NoNNKjSjp9A",
  },
  {
    id: "1",
    title: "Wedding Highlight 2023",
    youtubeId: "Tl9aio7WOxE",
  },

  {
    id: "3",
    title: "DEBOJYOTI X DOYEL",
    youtubeId: "-raje0s5ZR8",
  },
  {
    id: "4",
    youtubeId: "KY3Mr7jdThw",
  },
  {
    id: "5",
    youtubeId: "r6mnS-f-9og",
  },
  {
    id: "6",
    youtubeId: "ZHdphEtdmeU",
  },
];

const WEDDING_PLAYLIST = [
  {
    id: 1,
    title: "Two People One Feeling 💓 | Bengali Cinematic Wedding Teaser",
    description: "Saptarsi & Madhurima",
    youtubeId: "RKMng9vJI4U",
  },
  {
    id: 2,
    title: "The Wedding Teaser of Plabani 💗 Arghya",
    description: "Plabani & Arghya",
    youtubeId: "uK4FFUZBP8E",
  },
  {
    id: 3,
    title: "Suman & Sweety Bengali Cinematic Wedding Teaser",
    description: "Suman & Sweety",
    youtubeId: "Dy3VQVkexXU",
  },
  {
    id: 4,
    title: "Tumi jodi chao | Bengali Cinematic Wedding Teaser",
    description: "Anjan & Sisshyparna",
    youtubeId: "BWT8vdf8Dnk",
  },
  {
    id: 5,
    title: "TRUELY MEANT TO BE || Anupam 💕 Dipkanya ",
    description: "Anupam & Dipkanya",
    youtubeId: "B0J_4dVgSJc",
  },
  {
    id: 6,
    title: "Bengali Cinematic Wedding teaser || Rintu 💕 Sangita",
    description: "Rintu & Sangita",
    youtubeId: "5mItjnGYLaA",
  },
  {
    id: 7,
    title: "Sajani Sajani | Cinematic Bengali Wedding Teaser",
    description: "Varun & Kuheli",
    youtubeId: "dZ09lDh5hQs",
  },
];

const WEDDING_VIDEOS = [
  {
    id: "1",
    youtubeId: "Onp4_8L31po",
  },
  {
    id: "2",
    youtubeId: "TtYQgkP6Uns",
  },
  {
    id: "3",
    youtubeId: "J2WiT8XtKo0",
  },
  {
    id: "4",
    youtubeId: "JtXLpxlUy68",
  },
  {
    id: "5",
    youtubeId: "RZk_vRngWUE",
  },
  {
    id: "6",
    youtubeId: "l1o--yXkDGk",
  },
  {
    id: "7",
    youtubeId: "xGgeJ7mnnFc",
  },
  {
    id: "8",
    youtubeId: "508JQU-7T0w",
  },
  {
    id: "9",
    youtubeId: "T6UdM5i7AVc",
  },
  {
    id: "10",
    youtubeId: "Z-qll-h2yjQ",
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
      <div className="h-32" />
      <Heading title={FILMS_MAP.get(params.id)?.heading} />
      <VideoGridWithModal videos={FILMS_MAP.get(params.id)?.videos} />
      <YouTubePlaylistGallery playlist={FILMS_MAP.get(params.id)?.playlist} />
      <div className="h-16" />
    </>
  );
}
