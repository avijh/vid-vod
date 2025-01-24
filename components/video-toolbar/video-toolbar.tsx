import VideoAction from "../video-action/video-action";

export default function VideoToolbar() {
    return (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
            <VideoAction> ❤️  </VideoAction>
            <button className="bg-gray-900 text-white p-3 rounded-full hover:bg-pink-500">💬</button>
            <button className="bg-gray-900 text-white p-3 rounded-full hover:bg-pink-500">🔗</button>
            <button className="bg-gray-900 text-white p-3 rounded-full hover:bg-pink-500">➕</button>
        </div>
    );
}