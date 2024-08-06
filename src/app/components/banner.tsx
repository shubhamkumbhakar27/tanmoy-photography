import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="h-screen">
      <div className="absolute h-full w-full">
        <Image
          src="https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/409777094_3648411985412698_4508842612122428200_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WMh_9ZFl6soQ7kNvgGZQi05&_nc_ht=scontent.fblr1-7.fna&oh=00_AYAb1Jwi8EC-le3RrkecbDi5nHUQTX9Me_Xv8w9EG6dDww&oe=66B8400A"
          alt="Picture of the author"
          fill
        />
      </div>
      <div className="h-24" />
      {/* <div className="absolute h-32 w-[70%] flex justify-center items-center">
        <p className="text-white text-5xl font-serif italic font-bold underline">
          TANMOY PHOTOGRAPHY
        </p>
      </div> */}

      <div className="absolute h-32 w-[70%] flex justify-center items-center">
        <div className="wavy text-white text-2xl font-serif italic font-bold">
          <span style={{ "--i": "0" } as React.CSSProperties}>..</span>
          <span style={{ "--i": "1" } as React.CSSProperties}>T</span>
          <span style={{ "--i": "2" } as React.CSSProperties}>A</span>
          <span style={{ "--i": "3" } as React.CSSProperties}>N</span>
          <span style={{ "--i": "4" } as React.CSSProperties}>M</span>
          <span style={{ "--i": "5" } as React.CSSProperties}>O</span>
          <span style={{ "--i": "6" } as React.CSSProperties}>Y</span>
          <span style={{ "--i": "7" } as React.CSSProperties}>{`. .`}</span>
          <span style={{ "--i": "8" } as React.CSSProperties}>P</span>
          <span style={{ "--i": "9" } as React.CSSProperties}>H</span>
          <span style={{ "--i": "10" } as React.CSSProperties}>O</span>
          <span style={{ "--i": "11" } as React.CSSProperties}>T</span>
          <span style={{ "--i": "12" } as React.CSSProperties}>O</span>
          <span style={{ "--i": "13" } as React.CSSProperties}>G</span>
          <span style={{ "--i": "14" } as React.CSSProperties}>R</span>
          <span style={{ "--i": "15" } as React.CSSProperties}>A</span>
          <span style={{ "--i": "16" } as React.CSSProperties}>P</span>
          <span style={{ "--i": "17" } as React.CSSProperties}>H</span>
          <span style={{ "--i": "18" } as React.CSSProperties}>Y</span>
          <span style={{ "--i": "19" } as React.CSSProperties}>..</span>
        </div>
      </div>
    </div>
  );
}
