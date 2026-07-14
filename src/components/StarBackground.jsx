import { useEffect, useState } from "react";

const createStars = () => {
  const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 12000);

  return Array.from({ length: numberOfStars }, (_, id) => ({
    id,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.35 + 0.2,
    animationDuration: Math.random() * 4 + 2,
  }));
};

const createMeteors = () => {
  return Array.from({ length: 3 }, (_, id) => ({
    id,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 20,
    delay: Math.random() * 15,
    animationDuration: Math.random() * 3 + 3,
  }));
};

export const StarBackground = () => {
  const [stars, setStars] = useState(createStars);
  const [meteors] = useState(createMeteors);

  useEffect(() => {
    const refreshStars = () => setStars(createStars());

    window.addEventListener("resize", refreshStars);
    return () => window.removeEventListener("resize", refreshStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 22}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
