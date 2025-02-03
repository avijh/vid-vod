
import VideoBox from "@/components/video/video-box";

export default function Home() {
  return (
   <>  
      {/* Content */}
      <div className="flex-1 flex justify-center items-center p-5">
          <div className="flex bg-black rounded-lg relative overflow-hidden">
                 <VideoBox videoURL="https://6vmhas3p5y5i2cxf.public.blob.vercel-storage.com/cookingshooking-aloo-paratha-LeRw0WTplQoIwq3gUAngYesxze1YOe.mp4" />
              
          </div>
      </div>
  </>
  );
}