import { Component, Fragment } from "react";
import { Modal } from "components/modal";
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';


export class ImageGalleryItem extends Component {
    state = {
        isShowModal: false,
    };

    toggleModal = () => {
        this.setState(({ isShowModal }) => ({
            isShowModal: !isShowModal
        }));
    }

    render() {
        const { url, alt, largeImage } = this.props
        return (
            <Fragment>
                <Item onClick={this.toggleModal}>
                    <Image
                        src={url}
                        alt={alt} />
                    {/* loading="lazy" */}
                </Item>
                {this.state.isShowModal &&
                    <Modal onClose={this.toggleModal}>
                        <img alt={alt} src={largeImage} />
                    </Modal>
                }
            </Fragment>
        );
    };
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    
};