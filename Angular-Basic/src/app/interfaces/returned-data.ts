import { User } from "./user"

export interface ReturnedData {
    data: User[],
    page: number,
    per_page: number,
    support: any,
    total: number,
    total_pages: number
}
