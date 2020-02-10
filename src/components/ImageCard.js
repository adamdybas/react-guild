import React from 'react';

class ImageCard extends React.Component {
  constructor(props){
    super(props);

    this.imageRef = React.createRef();
    this.state = { spansCount: 1 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    this.setState({spansCount: Math.ceil(this.imageRef.current.clientHeight/10)});
  }

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spansCount}`}}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={alt_description}
        />
      </div>
    )
  }
};

export default ImageCard;
