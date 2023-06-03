import { Component } from "react";
import PropTypes from 'prop-types';
import { fetchImagesByQuery } from "serviceApi/api";
import { ImageGalleryItem } from "components/imageGalleryItem";
import { Button } from "components/button";
import { Loader } from "components/loader";
import { Gallery } from "./ImageGallery.styled";


export class ImageGallery extends Component {
    state = {
        gallery: [],
        error: null,
        status: 'idle',
        page: 1,
    };


}