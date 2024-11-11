
export type ResponseData = {
    data: any;
    msg: string;
    status: boolean;
};

export type ApiResponse = {
    data: ResponseData;
    status: number;
    headers: any;
}