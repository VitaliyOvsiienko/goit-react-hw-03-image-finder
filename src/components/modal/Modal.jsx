import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled'


const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleClickBackdrop = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <Overlay onClick={this.handleClickBackdrop}>
                <ModalWindow>
                    {this.props.children}
                </ModalWindow>
            </Overlay>,
            modalRoot,
        );
    };
};


Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};