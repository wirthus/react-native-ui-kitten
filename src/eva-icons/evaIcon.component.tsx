import React from 'react';
import { SvgProps } from 'react-native-svg';
import { IconProvider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

type IconElement = React.ReactElement<SvgProps>;
type IconComponent = React.ComponentType<SvgProps>;

export class EvaIcon implements IconProvider<SvgProps> {

  constructor(private content: IconComponent) {
  }

  public toReactElement(props: SvgProps): IconElement {
    const Icon: IconComponent = this.content;

    const { style, ...svgProps } = props;

    const flattenStyle = StyleSheet.flatten(style || {});

    // @ts-ignore - UI Kitten components pass here `tintColor`
    const tintColor = flattenStyle.tintColor;

    delete flattenStyle['tintColor'];

    return (
      <Icon
        style={props.style}
        fill={tintColor}
        {...svgProps}
      />
    );
  }
}
