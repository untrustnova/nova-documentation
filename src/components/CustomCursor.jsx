import React, { useEffect, memo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = memo(() => {
  const mX = useMotionValue(-100);
  const mY = useMotionValue(-100);

  // Snappier trail physics
  const sCfg = { damping: 30, stiffness: 400 };
  const t1X = useSpring(mX, sCfg);
  const t1Y = useSpring(mY, sCfg);
  const t2X = useSpring(mX, { damping: 25, stiffness: 300 });
  const t2Y = useSpring(mY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const onMove = (e) => { mX.set(e.clientX); mY.set(e.clientY); };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block overflow-hidden">
      <motion.div className="absolute w-6 h-6 bg-blue-500/10 rounded-full blur-xl" style={{ x: t2X, y: t2Y, translateX: "-50%", translateY: "-50%" }} />
      <motion.div className="absolute w-4 h-4 bg-white/10 rounded-full blur-md" style={{ x: t1X, y: t1Y, translateX: "-50%", translateY: "-50%" }} />
      <motion.div className="absolute w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_15px_#3b82f6]" style={{ x: mX, y: mY, translateX: "-50%", translateY: "-50%" }}>
        <div className="absolute inset-0 bg-white rounded-full blur-[1px]" />
      </motion.div>
    </div>
  );
});

export default CustomCursor;
