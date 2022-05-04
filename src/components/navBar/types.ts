import React from 'react';
import {OverridableComponent} from '@mui/material/OverridableComponent';
import {ButtonTypeMap, ExtendButtonBase, LinkTypeMap} from '@mui/material';

export interface ILoginElement {
  tag: OverridableComponent<LinkTypeMap<{}, 'a'>>;
  props: {
    href: string;
    color?: string;
    children: string;
  };
};

export interface ILogoutElement {
  tag: ExtendButtonBase<ButtonTypeMap<{}, 'button'>>;
  props: {
    color?: string;
    children: string;
    onClick: () => void;
  };
}

export type navElementType = {
  tag: React.FunctionComponent;
  props: {
    color?: string;
    children: string;
    onClick?: () => void;
    href?: string;
  }
}

export interface INavBarProps {
  title: string;
  navElements: navElementType[];
}
