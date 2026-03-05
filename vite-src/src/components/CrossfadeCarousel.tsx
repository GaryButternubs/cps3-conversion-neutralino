import { useEffect, useEffectEvent, useState } from "react";

function CrossfadeCarousel({
  interval,
  transition,
  images,
}: {
  interval: number;
  transition: number;
  images: Array<string>;
}) {
  const [active, setActive] = useState(0);

  const onTick = useEffectEvent(() => {
    setActive(active === images.length - 1 ? 0 : active + 1);
  });

  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, interval);

    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className="-z-1 absolute carousel w-full h-full">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="carousel-item absolute w-full h-full"
        >
          <img
            src={image}
            style={{
              opacity: active === index ? 1 : 0,
              transition: `opacity ${transition}ms`,
            }}
            className="blur-sm w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default CrossfadeCarousel;
