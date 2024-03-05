import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface CarouselProps {
  category: string | undefined;
  type: string | undefined;
  path: string[] | undefined;
}

const Carousel = ({ category, type, path }: CarouselProps) => {
  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [secondImageIndex, setSecondImageIndex] = useState(1);

  const showImage = (index: number) => {
    if (path) {
      if (index === path.length - 1) {
        setFirstImageIndex(index);
        setSecondImageIndex(0);
      } else {
        setFirstImageIndex(index);
        setSecondImageIndex(index + 1);
      }
    }
  };

  const showPrevImage = () => {
    if (path) {
      setFirstImageIndex(() => {
        if (firstImageIndex === 0) {
          return path?.length - 1;
        } else {
          return firstImageIndex - 1;
        }
      });
      setSecondImageIndex(() => {
        if (secondImageIndex === 0) {
          return path.length - 1;
        } else {
          return secondImageIndex - 1;
        }
      });
    }
  };
  const showNextImage = () => {
    if (path) {
      setFirstImageIndex(() => {
        if (firstImageIndex === path.length - 1) {
          return 0;
        } else {
          return firstImageIndex + 1;
        }
      });
      setSecondImageIndex(() => {
        if (secondImageIndex === path.length - 1) {
          return 0;
        } else {
          return secondImageIndex + 1;
        }
      });
    }
  };

  return (
    <div>
      {path && (
        <div className="flex gap-5">
          <div className="flex flex-col gap-4">
            {path.map((image, index) => (
              <div
                key={image}
                style={index === firstImageIndex || index === secondImageIndex ? { backgroundColor: 'gray' } : {}}
              >
                <button onClick={() => showImage(index)}>
                  <img
                    width={80}
                    style={index === firstImageIndex || index === secondImageIndex ? {} : { opacity: '0.7' }}
                    src={`/${category}/${type}/${image}`}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="relative flex gap-5">
            <button>
              <img
                width={540}
                src={`/${category}/${type}/${path[firstImageIndex]}`}
              />
            </button>
            <button>
              <img
                width={540}
                src={`/${category}/${type}/${path[secondImageIndex]}`}
              />
            </button>
            <button
              className="absolute top-0 left-0 h-full hover:bg-black/10 p-1 transition duration-200 ease-in-out"
              onClick={showPrevImage}
            >
              <ChevronLeft />
            </button>
            <button
              className="absolute top-0 right-0 h-full hover:bg-black/10 p-1 transition duration-200 ease-in-out"
              onClick={showNextImage}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
