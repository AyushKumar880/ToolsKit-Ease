import * as Icons from "lucide-react";
import { ComponentType } from "react";

export const getLucideIcon = (iconName: string): ComponentType<any> => {
  const icon = Icons[iconName as keyof typeof Icons];
  // Check if it's a valid React component (not a utility function)
  if (typeof icon === "function" && "displayName" in icon) {
    return icon as ComponentType<any>;
  }
  return Icons.HelpCircle as ComponentType<any>;
};
