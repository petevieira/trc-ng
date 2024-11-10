import { Injectable } from '@angular/core';
import axios from 'axios';
import { Api } from 'app/consts/api.consts';
import { Utils } from 'app/lib/utils';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor() { }

    /*---------------------------------------------------*/
    /* BOOKS API ----------------------------------------*/
    /*---------------------------------------------------*/

    async getBookMetadata(bookId: string) {
        return await axios.get(
            `${Api.Books.GET_BOOK_METADATA}/${bookId}`,
        );
    }

    async getBooksMetadata() {
        return await axios.get(
            Api.Books.GET_ALL_BOOKS_METADATA
        );
    }

    async generateBookSample(bookId: string, languageOptions: any[], switchingAlgorithm: string) {
        if (!bookId) {
            throw new Error('Book ID is required');
        }
        if (!languageOptions || languageOptions.length === 0) {
            throw new Error('Language options are required');
        }
        if (switchingAlgorithm === null || switchingAlgorithm === undefined) {
            throw new Error('Switching algorithm is required');
        }
        return await axios.post(
            Api.Books.GENERATE_BOOK_SAMPLE,
            { bookId, languageOptions, switchingAlgorithm }
        );
    }

    async getLanguagesFromCodes(languageCodes: string[]) {
        return await axios.post(
            Api.Languages.GET_LANGUAGES_FROM_CODES,
            { languageCodes }
        );
    }

    async generateCustomBook(bookId: string, weights: any, switchingAlgorithm: string) {
        console.debug("bookId: ", bookId);
        console.debug("weights: ", weights);
        console.debug("switchingAlgorithm: ", switchingAlgorithm);
        return await axios.post(
            Api.Books.GENERATE_CUSTOM_BOOK,
            {
                bookId,
                weights,
                switchingAlgorithm
            }
        );
    }

    async generateEbook(bookOptions: any) {
        return await axios.post(
            Api.Checkout.GENERATE_EBOOK,
            { bookOptions }
        );
    }

    async downloadEbook(path: string) {
        console.log(`Getting ${Api.Books.DOWNLOAD_EBOOK}/${path}`);
        const response: any = await axios.get(
            `${Api.Books.DOWNLOAD_EBOOK}/${path}`,
            { responseType: 'blob' }
        );
        console.log("response: ", response);
        if (response) {
            const url = window.URL.createObjectURL(new Blob([response]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'book.epub');
            document.body.appendChild(link);
            link.click();
        }
    }

    /*---------------------------------------------------*/
    /* CART ---------------------------------------------*/
    /*---------------------------------------------------*/

    async getCart() {
        return await axios.get(
            Api.Users.GET_CART
        );
    }

    async getCartWithDetails() {
        return await axios.post(
            Api.Users.GET_CART_WITH_DETAILS
        );
    }

    async getCartCount() {
        return await axios.post(
            Api.Users.GET_CART_COUNT
        );
    }

    async addItemToCart(bookId: string, languageOptions: any[], switchingAlgorithm: any) {
        return await axios.post(
            Api.Users.ADD_ITEM_TO_CART,
            { bookId, languageOptions, switchingAlgorithm },
            { withCredentials: true }
        );
    }

    async removeItemFromCart(index: number) {
        return await axios.post(
            Api.Users.REMOVE_ITEM_FROM_CART,
            { index }
        );
    }

    async updateCartItem(index: number, bookId: string, languageOptions: any[], switchingAlgorithm: string) {
        return await axios.post(
            Api.Users.UPDATE_CART_ITEM,
            { index, bookId, languageOptions, switchingAlgorithm },
            { withCredentials: true }
        );
    }

    /*---------------------------------------------------*/
    /* STRIPE PAYMENTS ----------------------------------*/
    /*---------------------------------------------------*/

    async createStripeCheckoutSession(itemsPageNumbers: number[]) {
        return await axios.post(
            Api.Checkout.CREATE_CHECKOUT_SESSION,
            { itemsPageNumbers }
        );
    }

    async getStripeSessionStatus() {
        return await axios.get(
            `${Api.Checkout.GET_CHECKOUT_STATUS}`
        );
    }

    /*---------------------------------------------------*/
    /* USERS API ----------------------------------------*/
    /*---------------------------------------------------*/

    async signIn(email: string|null, password: string|null, rememberMe: boolean|null) {
        Utils.validateEmail(email);
        Utils.validatePassword(password);
        return await axios.post(
            Api.Users.SIGN_IN,
            { email, password, rememberMe }
        );
    }

    async signUp(email: string|null, password: string|null, confirmedPassword: string|null) {
        Utils.validateEmail(email);
        Utils.validatePassword(password);
        Utils.validatePasswords(password, confirmedPassword);
        return await axios.post(
            Api.Users.SIGN_UP,
            { email, password, confirmedPassword }
        );
    }

    async verifyEmail(code: string|null) {
        if (!code) {
            throw new Error('Verification code is required');
        }
        return await axios.post(
            Api.Users.VERIFY_EMAIL,
            { code }
        );
    }

    /*---------------------------------------------------*/
    /* AUTH API -----------------------------------------*/
    /*---------------------------------------------------*/
    async getAccessToken() {
        return await axios.post(
            Api.Users.GET_ACCESS_TOKEN,
        );
    }

    async logOut() {
        return await axios.post(
            Api.Users.LOG_OUT,
        );
    }

    /*---------------------------------------------------*/
    /* Contact ------------------------------------------*/
    /*---------------------------------------------------*/
    async sendContactMessage(name: string, email: string, message: string) {
        return await axios.post(
            Api.Users.SEND_CONTACT_MESSAGE,
            { name, email, message }
        );
    }
}
