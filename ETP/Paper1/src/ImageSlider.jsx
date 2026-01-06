import { useState } from "react";

export default function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((next) =>
        {if(next===images.length-1){
            return 0;
        }else{
            return next+1;
        }}
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
    {if(prev===0){
        return images.length -1 ;
    }else{
        return prev-1;
    }}
      
    );
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <img
        src={images[currentIndex]}
        alt="slider"
        className="w-150 h-75 object-cover rounded-lg"
      />

      <div className="flex gap-4">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Previous
        </button>

        <button
          onClick={nextImage}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
