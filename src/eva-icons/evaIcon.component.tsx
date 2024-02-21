import React from 'react';
import { SvgProps } from 'react-native-svg';
import { IconProvider } from '@wirthus/ui-kitten-components';

type IconElement = React.ReactElement<SvgProps>;
type IconComponent = React.ComponentType<SvgProps>;

export class EvaIcon implements IconProvider<SvgProps> {

  constructor(private content: IconComponent) {
  }

  public toReactElement(props: SvgProps): IconElement {
    const Icon: IconComponent = this.content;

    const { style, ...svgProps } = props;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Eva maps icon color to `tintColor`
    const { tintColor, ...restStyle } = style;

    return (
      <Icon
        style={restStyle}
        fill={tintColor}
        {...svgProps}
      />
    );
  }
}
