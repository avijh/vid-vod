export default function VideoBox({ videoURL }: { videoURL: string }) {
    // console.log(videoURL);
    return (
        <>
            <video src={videoURL} className="w-full h-full object-cover" controls></video>
        </>
        );
}