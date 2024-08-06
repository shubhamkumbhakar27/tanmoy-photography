import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="w-full flex justify-center bg-orange-50">
      <div className="w-[70%] flex justify-between">
        <div className="div1">
          <div className=" flex justify-center items-center">
            <Image
              src="https://scontent.fblr1-10.fna.fbcdn.net/v/t1.6435-9/84300361_177131030272730_5097741931102863360_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=zT7UmwRu54UQ7kNvgH83cxk&_nc_ht=scontent.fblr1-10.fna&oh=00_AYDCDEYsXYTyuPtbvv_Uhz3CevjXoEK_LK16SsjVVfPR2w&oe=66DA147B"
              alt="me"
              className="profile-pic"
              width={160}
              height={100}
            />
          </div>
          <div className="h-8" />

          <h2 className="text-lg text-center text-amber-500 font-bold">
            ABOUT TANMOY PHOTOGRAPHY
          </h2>
        </div>
        <div className="div2">
          <p className="text-md italic text-gray-500">
            At Tanmoy Photography, we excel in the art of photography and
            videography, specializing in weddings, engagements, and pre-wedding
            shoots. Our commitment to simplifying your wedding photography
            experience. With a single point of contact guiding you throughout,
            faster delivery, and an in-house team handling every aspect from
            production to editing and album printing. With us, it’s not just a
            service but a seamless and exceptional journey.
          </p>
        </div>
      </div>
    </div>
  );
}
