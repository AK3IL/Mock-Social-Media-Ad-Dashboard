import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, LucideProps } from 'lucide-react';
import { PlatformName, SocialPlatform } from '@shared/types';
const platformIcons: SocialPlatform[] = [
  { name: 'Facebook', Icon: Facebook, color: 'text-blue-600' },
  { name: 'Twitter', Icon: Twitter, color: 'text-sky-500' },
  { name: 'LinkedIn', Icon: Linkedin, color: 'text-blue-700' },
  { name: 'Instagram', Icon: Instagram, color: 'text-pink-500' },
];
interface SocialIconProps extends Omit<LucideProps, 'color'> {
  platform: PlatformName;
  className?: string;
}
export function SocialIcon({ platform, className, ...props }: SocialIconProps) {
  const platformInfo = platformIcons.find(p => p.name === platform);
  if (!platformInfo) {
    return null;
  }
  const { Icon, color } = platformInfo;
  return <Icon className={`${color} ${className}`} {...props} />;
}