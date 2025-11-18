export const AnimatedGradient = () => {
  return (
    <>
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(-45deg, #000000, #0a0a0a, #121212, #0d0d0d)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite'
        }}
      />
    </>
  );
};
