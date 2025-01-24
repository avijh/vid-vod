import Image from "next/image";
import Sidenav from '@/components/sidenav/sidenav';
import VideoToolbar from '@/components/video-toolbar/video-toolbar'; 
import VideoBox from "@/components/video-box/video-box";

export default function Home() {
  return (
   <>  
    <div className="flex bg-black text-white">
      <Sidenav />
      {/* Content */}
      <div className="flex-1 flex justify-center items-center p-5 relative">
          <div className="flex bg-black rounded-lg relative overflow-hidden">
                 <VideoBox videoURL="https://0eaq2bngox9qjyae.public.blob.vercel-storage.com/cookingshooking-aloo-paratha-SsDrpahaUjHxMCu34rIC5F1PrvtuJ5.mp4" />
                 {/* <video src="https://0eaq2bngox9qjyae.public.blob.vercel-storage.com/cookingshooking-aloo-paratha-SsDrpahaUjHxMCu34rIC5F1PrvtuJ5.mp4" className="w-full h-full object-cover" controls></video> */}
              <VideoToolbar />
          </div>
      </div>
    </div>
  </>
  );
}
