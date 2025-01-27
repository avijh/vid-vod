
import VideoToolbar from '@/components/video-toolbar/video-toolbar'; 
import VideoBox from "@/components/video-box/video-box";

export default function Home() {
  return (
   <>  
    <div className="flex bg-black text-white">
      
      {/* Content */}
      <div className="flex-1 flex justify-center items-center p-5 relative">
          <div className="flex bg-black rounded-lg relative overflow-hidden">
                 <VideoBox videoURL="https://6vmhas3p5y5i2cxf.public.blob.vercel-storage.com/cookingshooking-aloo-paratha-LeRw0WTplQoIwq3gUAngYesxze1YOe.mp4" />
              <VideoToolbar />
          </div>
      </div>
    </div>
  </>
  );
}
