import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface AboutItem {
  id: number;
  title: string;
  text: string;
  icon: FontAwesomeIconProps["icon"];
}