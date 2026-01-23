"use client";

import { Card } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedMuiCardProps = {
  children: ReactNode;
  hoverScale?: number;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  duration?: number;
};

export default function AnimatedMuiCard({
  children,
  hoverScale = 1.05,
  startY = 40,
  startX = 0,
  endX = 0,
  endY = 0,
  duration = 1,
}: AnimatedMuiCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: startY, x: startX }}
      whileInView={{ opacity: 1, y: endY, x: endX }}
      viewport={{ once: true }}
      transition={{ duration: duration, ease: "easeOut" }}
      whileHover={{ scale: hoverScale }}
      className="inline-block w-full"
    >
      <Card
        elevation={6}
        sx={{
          borderRadius: 3,
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
          },
        }}
      >
        {children}
      </Card>
    </motion.div>
  );
}
