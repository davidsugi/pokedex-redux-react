import React,{Component} from "react";
import no_img from '../assets/missing.svg';

import '../style/App.scss'
const _loaded = {};

class ImageLoader extends Component {
  
  //initial state: image loaded stage 
  state = {
    loaded: _loaded[this.props.src]
  };

  //define our loading and loaded image classes
  static defaultProps = {
    className: "",
    loadingClassName: "img-loading",
    loadedClassName: "img-loaded"
  };

  //image onLoad handler to update state to loaded
  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };


  render() {
  
    let { className, loadedClassName, loadingClassName } = this.props;

    className = `${className} ${this.state.loaded
      ? loadedClassName
      : loadingClassName}`;

    return <img 
             src={this.props.src} 
             alt={this.props.alt}
             onClick={this.props.onClick} 
             className={className} 
             onError={(ev)=>{ ev.target.onerror = null; ev.target.src=no_img }}
             onLoad={this.onLoad} />;
  }
}

export default ImageLoader;