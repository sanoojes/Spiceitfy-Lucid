import React from 'react';
import StaticBackground from '@/components/background/StaticBackground';
import AnimatedBackground from '@/components/background/AnimatedBackground';
import SolidBackground from '@/components/background/SolidBackground';
import DynamicBackground from '@/components/background/DynamicBackground';
import { useSettingsStore } from '@/store/settingsStore';
import type { CustomCSSProperties } from '@/types/settings';

const BackgroundManager = () => {
  const { backgroundMode, backgroundStyles } = useSettingsStore();

  const [dynamicStyle, setDynamicStyle] = React.useState<CustomCSSProperties>(
    {}
  );

  React.useEffect(() => {
    setDynamicStyle({
      '--background-color': backgroundStyles[backgroundMode]?.backgroundColor,
      '--opacity': backgroundStyles[backgroundMode]?.opacity,
      '--brightness': backgroundStyles[backgroundMode]?.brightness,
      '--contrast': backgroundStyles[backgroundMode]?.contrast,
      '--time': `${backgroundStyles[backgroundMode]?.time || 0}s`,
      '--blur': `${backgroundStyles[backgroundMode]?.blur || 0}px`,
      '--saturation': backgroundStyles[backgroundMode]?.saturation,
      '--backdrop-blur': `${
        backgroundStyles[backgroundMode]?.backdropBlur || 0
      }px`,
    });
  }, [backgroundMode, backgroundStyles]);

  return (
    <div className='background-wrapper' style={dynamicStyle}>
      {backgroundMode === 'animated' && <AnimatedBackground />}
      {backgroundMode === 'static' && <StaticBackground />}
      {backgroundMode === 'solid' && <SolidBackground />}
      <DynamicBackground />
    </div>
  );
};

export default BackgroundManager;
