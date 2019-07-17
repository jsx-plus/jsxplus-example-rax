import { createElement, Component } from 'rax';
import View from 'rax-view';

export default class extends Component {
  render () {
    return (
      <View className="waterfall">
        <View>This is waterfall</View>
        <slot name="header" />
        {
          [0,1,2].map(i => <slot name="item" foo="bar" index={i}/>)
        }
        <slot name="footer" />
      </View>
    );
  }
}