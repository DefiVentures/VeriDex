import { push } from 'connected-react-router';

import { ERC20_APP_BASE_PATH, ERC721_APP_BASE_PATH } from '../../common/constants';
import { ThunkCreator } from '../../util/types';

export const goToHomeErc20: ThunkCreator = () => {
    return async (dispatch, getState) => {
        const state = getState();

        dispatch(
            push({
                ...state.router.location,
                pathname: `${ERC20_APP_BASE_PATH}/`,
            }),
        );
    };
};

export const goToWallet: ThunkCreator = () => {
    return async (dispatch, getState) => {
        const state = getState();

        dispatch(
            push({
                ...state.router.location,
                pathname: `${ERC20_APP_BASE_PATH}/my-wallet`,
            }),
        );
    };
};

export const goToHomeErc721 = () => {
    return async (dispatch: any, getState: any) => {
        const state = getState();

        dispatch(
            push({
                ...state.router.location,
                pathname: `${ERC721_APP_BASE_PATH}/`,
            }),
        );
    };
};

export const goToMyCollectibles = () => {
    return async (dispatch: any, getState: any) => {
        const state = getState();

        dispatch(
            push({
                ...state.router.location,
                pathname: `${ERC721_APP_BASE_PATH}/my-collectibles`,
            }),
        );
    };
};

export const goToIndividualCollectible = (collectibleId: string) => {
    return async (dispatch: any, getState: any) => {
        const state = getState();

        dispatch(
            push({
                ...state.router.location,
                pathname: `${ERC721_APP_BASE_PATH}/collectible/${collectibleId}`,
            }),
        );
    };
};
