import { Category } from "@prisma/client";

export type CategoryRequest = {
    name: string;
};

export type CategoryResponse = {
    id: number;
    name: string;
};

export function toCategoryResponse(category: Category): CategoryResponse {
    return {
        id: category.id,
        name: category.name,
    };
}
