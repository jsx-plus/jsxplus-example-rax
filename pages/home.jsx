import { createElement, Component } from "rax";
import View from "rax-view";
import Text from "rax-text";
import Image from "rax-image";
import Header from "../components/Header";
import WaterFall from "../components/WaterFall";
import "./home.css";

const logo = "http://gw.alicdn.com/tfs/TB11oXVXRGE3KVjSZFhXXckaFXa-149-148.png";

export default class extends Component {
  /**
   * Config for page.
   */
  static config = {
    window: {}
  };

  state = {
    name: "Rax",
    count: 0
  };

  handleClick = event => {
    this.setState({
      name: "MiniApp"
    });
  };

  render() {
    // You can access app from page's props.
    console.log("App:", this.props.app);

    const { name, count } = this.state;
    const source = {
      uri: logo,
      width: 150,
      height: 150
    };
    const obj = {
      foo: "bar",
      a: 1,
      b: 2
    };
    return (
      <View x-if={true} x-class={{ "page-home": true }}>
        <Header>
          <Image source={source} className="home-logo" />
          <Text x-memo className="home-title" onClick={this.handleClick}>
            Welcome to {name}
          </Text>
        </Header>

        <View x-for={(item, key) in obj}>
          key: {key}, item: {item}
        </View>

        <View x-if={count % 4 === 0}>count: {count}, count % 4 = 0</View>
        <View x-elseif={count % 4 === 1}>count: {count}, count % 4 = 1</View>
        <View x-elseif={count % 4 === 2}>count: {count}, count % 4 = 2</View>
        <View x-else>count: {count}, count % 4 = 3</View>

        <View onClick={() => this.setState(state => state.count++)} style={{background:'red'}}>
          增加计数
        </View>

        <Fragment>Using fragment tag.</Fragment>

        <WaterFall>
          <View x-slot:header>This is header slot content.</View>
          <View x-slot:item="props">
            This is item slot content. {JSON.stringify(props)}
          </View>
          <View x-slot:footer>This is footer slot content.</View>
        </WaterFall>

        <View className="home-intro">
          <Text>To get started, edit and rebuild.</Text>
        </View>
      </View>
    );
  }
}
