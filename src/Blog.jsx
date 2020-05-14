import React from 'react';
import Article from "./Article";
// import {Foo, Bar} from './components/ForBar';
import * as FooBar from './components/ForBar';
import Hoge from './components/Hoge';


class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    // ボタンがクリックされたらいいねをカウントアップする
    document.getElementById("counter").addEventListener('click', this.countUp)
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({ count: 0 })
    }
  };

  // componentWillMount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // };

  // 公開状態を反転させる関数
  // togglePublished = () => {
  //   this.setState( {
  //     isPublished: !this.state.isPublished
  //   })
  // };

  countUp = () => {
    this.setState( { count: this.state.count + 1})
  };

  render() {
    const authorName = "Reacthack"
    return (
      <>
        <Article
            title={"Reactの使い方"}
            // order={3}
            isPublished={this.state.isPublished}
            author={authorName}
            count={this.state.count}
        />
        {/* <Foo /> */}
        <FooBar.Foo />
        {/* <Bar /> */}
        <FooBar.Bar />
        <Hoge />
      </>
    )
  }
}

export default Blog