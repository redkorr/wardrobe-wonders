import buildPlaceholderImageUrl from '@/utils/buildPlaceholderImageUrl';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface CarouselProps {
  category: string | undefined;
  type: string | undefined;
  paths: string[] | undefined;
  color: string;
}

const Carousel = ({ category, type, paths, color }: CarouselProps) => {
  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [secondImageIndex, setSecondImageIndex] = useState(1);

  const showImage = (index: number) => {
    if (paths) {
      if (index === paths.length - 1) {
        setFirstImageIndex(index);
        setSecondImageIndex(0);
      } else {
        setFirstImageIndex(index);
        setSecondImageIndex(index + 1);
      }
    }
  };
  console.log(paths);

  const showPrevImage = () => {
    if (paths) {
      setFirstImageIndex(() => {
        if (firstImageIndex === 0) {
          return paths?.length - 1;
        } else {
          return firstImageIndex - 1;
        }
      });
      setSecondImageIndex(() => {
        if (secondImageIndex === 0) {
          return paths.length - 1;
        } else {
          return secondImageIndex - 1;
        }
      });
    }
  };
  const showNextImage = () => {
    if (paths) {
      setFirstImageIndex(() => {
        if (firstImageIndex === paths.length - 1) {
          return 0;
        } else {
          return firstImageIndex + 1;
        }
      });
      setSecondImageIndex(() => {
        if (secondImageIndex === paths.length - 1) {
          return 0;
        } else {
          return secondImageIndex + 1;
        }
      });
    }
  };

  return (
    <div>
      {paths && (
        <div className="flex gap-5">
          <div className="flex flex-col gap-4">
            {paths.map((path, index) => (
              <div
                key={path}
                style={index === firstImageIndex || index === secondImageIndex ? { backgroundColor: 'gray' } : {}}
                className="h-[118px]"
              >
                <button onClick={() => showImage(index)}>
                  <img
                    width={80}
                    style={index === firstImageIndex || index === secondImageIndex ? {} : { opacity: '0.7' }}
                    src={buildPlaceholderImageUrl(color, path)}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="relative flex gap-5 w-[1080px]">
            <div className="flex overflow-hidden">
              {paths.map((path, index) => (
                <img
                  key={path}
                  src={buildPlaceholderImageUrl(color, paths[index], '540x813')}
                  style={{ translate: `${-100 * firstImageIndex}%` }}
                  className="duration-300 ease-in-out"
                />
              ))}

              <img
                src={buildPlaceholderImageUrl(color, paths[0], '540x813')}
                style={{ translate: `${-100 * firstImageIndex}%` }}
                className="duration-300 ease-in-out"
              />
            </div>
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
