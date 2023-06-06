import { Component } from "react";
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/imageGalleryItem';
import { Button } from 'components/button';
import { Loader } from 'components/loader';
import {getGalleryImages} from '../../serviceApi'

export class ImageGallery extends Component {
    state = {
        gallery: [],
        error: null,
        status: 'idle',
        page: 1,
    };

    async componentDidUpdate(prevProps, prevState) {
        
        const { query: previousInquiry } = prevProps;
        const { query: nextInquiry } = this.props;

        if (previousInquiry !== nextInquiry) {
            this.setState({ status: 'pending', page: 1 });

            try {
                const { hits, total } = await getGalleryImages(nextInquiry, 1);

                if (total === 0) {
                    const error = new Error('Houston we have a problem')
                    this.setState({ error, status: 'rejected' })
                    return;
                };

                this.setState(prevState => {
                    return {
                        gallery: hits,
                        status: 'resolved',
                        page: prevState.page + 1,
                    }
                });
            } catch (error) {this.setState({ error, status: 'rejected' });}
        };
    };

    handleLoadMore = async () => { 
        try {
            const { hits } = await getGalleryImages(this.props.query, this.state.page);
            this.setState(prevState => {
                    return {
                        gallery: [...prevState.gallery, ...hits],
                        page: prevState.page + 1,
                    }
                });
        } catch (error) {this.setState({ error, status: 'rejected' });}
    };

    render() {
        const { gallery, error, status } = this.state;

        if (status === 'pending') {
            return <Loader/>
        };

        if (status === 'rejected') {
            Notify.failure(`${error.message}`)
            return;
        };

        if (status === 'resolved') {
            return <>
                    <Gallery>
                    {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
                        <ImageGalleryItem
                            key={id}
                            url={webformatURL}
                            alt={tags}
                            largeImage={largeImageURL}
                        />
                    ))}
                    </Gallery>
                    <Button onClick={this.handleLoadMore}>Load more</Button>
            </>
        };
    };
}

ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
};