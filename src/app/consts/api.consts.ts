import { environment } from "environments/environment";

export class Api {
    public static API_ROOT = 'http://localhost:3000/api';
    static BOOKS = 'books';
    static CHECKOUT = 'checkout';
    static LANGUAGES = 'languages';
    static USERS = 'users';

    public static Books = {
        GET_BOOK_METADATA:         `${Api.API_ROOT}/${Api.BOOKS}/get-book-metadata`,
        GET_ALL_BOOKS_METADATA:    `${Api.API_ROOT}/${Api.BOOKS}/get-all-books-metadata`,
        GENERATE_CUSTOM_BOOK:      `${Api.API_ROOT}/${Api.BOOKS}/generate-custom-book`,
        GENERATE_BOOK_SAMPLE:      `${Api.API_ROOT}/${Api.BOOKS}/generate-book-sample`,
        DOWNLOAD_EBOOK:            `${Api.API_ROOT}/${Api.BOOKS}/download-ebook`,
    }

    public static Checkout = {
        CREATE_CHECKOUT_SESSION:   `${Api.API_ROOT}/${Api.CHECKOUT}/create-checkout-session`,
        GET_CHECKOUT_STATUS:       `${Api.API_ROOT}/${Api.CHECKOUT}/get-checkout-status`,
        GENERATE_EBOOK:            `${Api.API_ROOT}/${Api.CHECKOUT}/generate-ebook`,
    }

    public static Languages = {
        GET_LANGUAGES_FROM_CODES:  `${Api.API_ROOT}/${Api.LANGUAGES}/get-languages-from-codes`,
    }

    public static Users = {
        SIGN_IN:                   `${Api.API_ROOT}/${Api.USERS}/sign-in`,
        SIGN_UP:                   `${Api.API_ROOT}/${Api.USERS}/sign-up`,
        VERIFY_EMAIL:              `${Api.API_ROOT}/${Api.USERS}/verify-email`,
        GET_ACCESS_TOKEN:          `${Api.API_ROOT}/${Api.USERS}/get-access-token`,
        LOG_OUT:                   `${Api.API_ROOT}/${Api.USERS}/log-out`,
        GET_CART:                  `${Api.API_ROOT}/${Api.USERS}/get-cart`,
        GET_CART_WITH_DETAILS:     `${Api.API_ROOT}/${Api.USERS}/get-cart-with-details`,
        GET_CART_COUNT:            `${Api.API_ROOT}/${Api.USERS}/get-cart-count`,
        ADD_ITEM_TO_CART:          `${Api.API_ROOT}/${Api.USERS}/add-item-to-cart`,
        REMOVE_ITEM_FROM_CART:     `${Api.API_ROOT}/${Api.USERS}/remove-item-from-cart`,
        UPDATE_CART_ITEM:          `${Api.API_ROOT}/${Api.USERS}/update-cart-item`,
        SEND_CONTACT_MESSAGE:      `${Api.API_ROOT}/${Api.USERS}/send-contact-message`,
    }
}