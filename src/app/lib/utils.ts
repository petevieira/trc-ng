import { Consts } from 'app/consts/app.consts';

const validateEmail = (email: string|null) => {
    if (!email) {
        throw new Error('Email is required');
    }
    if (!email.match(Consts.EMAIL_REGEX)) {
        throw new Error('Email is not valid');
    }
}

const validatePassword = (password: string|null) => {
    if (!password) {
        throw new Error('Password is required');
    }
}

const validatePasswords = (password: string|null, passwordConfirmation: string|null) => {
    if (password !== passwordConfirmation) {
        throw new Error('Passwords do not match');
    }
}

export const Utils = {
    validateEmail,
    validatePassword,
    validatePasswords,
};