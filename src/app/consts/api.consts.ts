import { environment } from "environments/environment";

export class Api {
    public static API_ROOT = 'http://localhost:3000/api';
    static USERS = 'users';
    static ITEMS = 'items';
    static VOLUNTEERS = 'volunteers';
    static TEXT = 'text';

    public static Root = {
        HEALTH_CHECK:               `${Api.API_ROOT}/`,
    }

    public static Users = {
        USER_IS_ADMIN:          `${Api.API_ROOT}/${Api.USERS}/user-is-admin`,
        SIGN_IN_ADMIN:          `${Api.API_ROOT}/${Api.USERS}/sign-in-admin`,
        ADMIN_IS_SIGNED_IN:     `${Api.API_ROOT}/${Api.USERS}/admin-is-signed-in`,
    }

    public static Items = {
        ADD_BASIC_ITEM:          `${Api.API_ROOT}/${Api.ITEMS}/add-basic-item`,
        ADD_FULL_ITEM:           `${Api.API_ROOT}/${Api.ITEMS}/add-full-item`,
        DELETE_ITEM:             `${Api.API_ROOT}/${Api.ITEMS}/delete-item`,
        UPDATE_ITEM:             `${Api.API_ROOT}/${Api.ITEMS}/update-item`,
        GET_ITEM:                `${Api.API_ROOT}/${Api.ITEMS}/get-item`,
        GET_ITEMS_BASIC:         `${Api.API_ROOT}/${Api.ITEMS}/get-items-basic`,
        FIND_OWNER_BY_EMAIL:     `${Api.API_ROOT}/${Api.ITEMS}/find-owner-by-email`,
    }

    public static Volunteers = {
        ADD_VOLUNTEER:           `${Api.API_ROOT}/${Api.VOLUNTEERS}/add-volunteer`,
        GET_VOLUNTEER:           `${Api.API_ROOT}/${Api.VOLUNTEERS}/get-volunteer`,
        DELETE_VOLUNTEER:        `${Api.API_ROOT}/${Api.VOLUNTEERS}/delete-volunteer`,
        UPDATE_VOLUNTEER:        `${Api.API_ROOT}/${Api.VOLUNTEERS}/update-volunteer`,
        GET_DAYS_VOLUNTEERS:     `${Api.API_ROOT}/${Api.VOLUNTEERS}/get-days-volunteers`,
        GET_PAST_VOLUNTEERS:     `${Api.API_ROOT}/${Api.VOLUNTEERS}/get-past-volunteers`,
        FIND_VOLUNTEER_BY_EMAIL: `${Api.API_ROOT}/${Api.VOLUNTEERS}/find-volunteer-by-email`,
    }

    public static Text = {
        GET_TEXT:                `${Api.API_ROOT}/${Api.TEXT}/get-text`,
    }
}
