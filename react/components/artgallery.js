import React from 'react'; 
import Gallery from 'react-grid-gallery'; 
import PropTypes from 'prop-types'; 

export default class ArtGallery extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images
    }

  }

  setCustomTags(i) {
    return (
      i.tags.map((t) => {
        return(<div 
               key={t.value}
               style={customTagStyle}>
               {t.title}
               </div>); 
      })
    );
  }

  render() {
    var images = 
      this.state.images.map((i) => {
        i.customOverlay = (
            <div style={captionStyle}>
              <div>{i.caption}</div>
              {i.hasOwnProperty('tags') && this.setCustomTags(i)}
            </div>);
        return i; 
      }); 

    return ( 
        <div style={{
             display: "block", 
             minHeight: "1px",
             width: "100%", 
             overflow: "auto"}}>
          <Gallery
               images={images}
               rowHeight={250}
               margin={8}
               enableImageSelection={false}
               backdropClosesModal={true}/>
        </div>
    );      
  }
}

ArtGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired, 
      thumbnail: PropTypes.string.isRequired, 
      srcset: PropTypes.array, 
      caption: PropTypes.string, 
      tumbnailWidth: PropTypes.number.isRequired, 
      thumbnailHeight: PropTypes.number.isRequired
    })
  ).isRequired
}; 

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};
