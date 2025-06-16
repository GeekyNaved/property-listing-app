import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

interface BaseButtonProps {
  title: string;
  onPress?: () => void;
  color?: 'blue' | 'red' | 'green' | 'gray';
  extraClasses?: string;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  title,
  onPress,
  color = 'blue',
  extraClasses = '',
}) => {
  const bgColor =
    color === 'blue'
      ? 'bg-blue-500'
      : color === 'red'
      ? 'bg-red-500'
      : color === 'green'
      ? 'bg-green-500'
      : 'bg-gray-500';

  return (
    <TouchableOpacity
      style={tw`${bgColor} p-3 rounded ${extraClasses}`}
      onPress={onPress}
    >
      <Text style={tw`text-white text-center font-semibold`}>{title}</Text>
    </TouchableOpacity>
  );
};
