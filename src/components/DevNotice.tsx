import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "phosphor-react";

const DevNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem("dev-notice-seen");
    if (hasSeenNotice) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("dev-notice-seen", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-4 px-6 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
              <p className="text-sm md:text-base font-medium">
                🚧 Site Under Development - Some features may be in progress
              </p>
            </div>
            <button
              onClick={handleClose}
              className="flex-shrink-0 hover:bg-primary-foreground/20 p-1 rounded transition-colors"
              aria-label="Close notice"
            >
              <X size={20} weight="bold" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DevNotice;
