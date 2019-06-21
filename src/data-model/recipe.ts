/*
 * Object to store Recipe data
 */
export class Recipe {
    key? : any;
    name : string;
    mainIngredient: string;
    ingredients: any;
    method: any;
    shortDescription?: string;
    imageUrl: string;
}