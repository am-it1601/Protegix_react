export interface BaseDocument  {
    _id: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface BaseResponse {
    success: boolean;
    message?: string;
    status: REQUEST_STATUS;
    authenticated?: boolean;
}

export interface Sort<T> {
    sorted: boolean;
    order?: SORT_ORDER;
    by: keyof T;
}

export interface Pageable<T> {
    page?: number;
    limit?: number;
    totalItems: number;
    itemsPerPage?: number;
    sort?: Sort<T>;
}

// RESPONSE
export interface AbstractResponseObject<T> extends BaseResponse {
    data?: T;
    _id: string | undefined;
}

export interface PaginatedResponseObject<T> extends BaseResponse {
    content: T[] | undefined;
    pageData?: Pageable<T>;
}