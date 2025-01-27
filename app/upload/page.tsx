import Uploader from '@/components/uploader';


export default function UploadPage() {
    
    return (
        <>
        
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <Uploader />
       {/* <div className="border-dashed border-2 border-gray-300 rounded-lg h-64 flex flex-col items-center justify-center">
            
             <div className="flex flex-col items-center">
                <div className="text-gray-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm4 8a1 1 0 000 2h6a1 1 0 100-2H7zm0-4a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                    </svg>
                </div>
                <p className="text-gray-700 font-semibold">Select video to upload</p>
                <p className="text-gray-500 text-sm">Or drag and drop it here</p>
            </div>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Select video</button> 
        </div>*/}

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex flex-col items-start">
                <span className="font-medium">Size and duration</span>
                <p>Maximum size: 10 GB, video duration: 60 minutes.</p>
            </div>
            <div className="flex flex-col items-start">
                <span className="font-medium">File formats</span>
                <p>Recommended: &quot; .mp4&quot;. Other major formats are supported.</p>
            </div>
            <div className="flex flex-col items-start">
                <span className="font-medium">Video resolutions</span>
                <p>Minimum resolution: 720p. 2K and 4K are supported.</p>
            </div>
            <div className="flex flex-col items-start">
                <span className="font-medium">Aspect ratios</span>
                <p>Recommended: 16:9 for landscape, 9:16 for vertical.</p>
            </div>
        </div>
        </div>
        </>
    );
}