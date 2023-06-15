import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg';

interface SvgIconButtonProps {
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  color: string;
  outlineColor: string;
  onPress?: (isActive: boolean) => void;
}

const SvgIconButton: React.FC<SvgIconButtonProps> = ({
  Icon,
  color,
  outlineColor,
  onPress,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handlePress = useCallback(() => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    onPress?.(newActiveState);
  }, [isActive, onPress]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Svg width={28} height={28} viewBox="0 0 28 28">
        <Icon fill={isActive ? color : outlineColor} />
      </Svg>
    </TouchableOpacity>
  );
};

export default SvgIconButton;
