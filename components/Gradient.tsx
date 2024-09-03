import React, { useEffect, useRef, useState } from "react";

import { NeatConfig, NeatGradient } from "@firecms/neat";

export const GradientBG: React.FC = (height) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const gradientRef = useRef<NeatGradient | null>(null);

    useEffect(() => {

        if (!canvasRef.current)
            return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
                                              "colors": [
                                                      {
                                                          "color": "#252525",
                                                          "enabled": true
                                                      },
                                                      {
                                                          "color": "#9A9898",
                                                          "enabled": true
                                                      },
                                                      {
                                                          "color": "#595A5A",
                                                          "enabled": true
                                                      },
                                                      {
                                                          "color": "#7219D1",
                                                          "enabled": true
                                                      },
                                                      {
                                                          "color": "#f5e1e5",
                                                          "enabled": false
                                                      }
                                                  ],
                                                  "speed": 3,
                                                  "horizontalPressure": 4,
                                                  "verticalPressure": 4,
                                                  "waveFrequencyX": 2,
                                                  "waveFrequencyY": 4,
                                                  "waveAmplitude": 5,
                                                  "shadows": 0,
                                                  "highlights": 0,
                                                  "colorBrightness": 1,
                                                  "colorSaturation": 10,
                                                  "wireframe": true,
                                                  "colorBlending": 5,
                                                  "backgroundColor": "#363534",
                                                  "backgroundAlpha": 1,
                                                  "resolution": 1
                                              });

        return gradientRef.current.destroy;

    }, [canvasRef.current]);

    return (
        <canvas
            style={{
                isolation: "isolate",
                height: "100%",
                width: "100%",
                position: 'fixed',
                top: '0',
                left: '0',
            }}
            ref={canvasRef}
        />
    );
};