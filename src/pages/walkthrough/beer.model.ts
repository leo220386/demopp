export class PromotionModel {
	Brand : string;
	Description : string;
	Format : string;
	Quantity : string;
	Capacity : string;
	Type : string;
	Photo : string;
	Link : string;
	Price : number;
	IsPromo : boolean;
	Store : string;
}

export class StorePromotionModel {
	Store : string;
	Promotions : Array<PromotionModel>;
}
export class StorePriceModel{
	Description :  string;
	Store :  string;
	Link :  string;
	Photo :  string;
	Price : number;
	IsPromo : boolean;
}

export class ProducModel {
	Format : string;
	Quantity : string;
	Capacity : string;
	Type : string;	
	StorePrices: Array<StorePriceModel>
}

export class BrandProductModel{
	Brand : string;
	Products: Array<ProducModel>
}

export class BeerModel {
	StorePromotions: Array<StorePromotionModel>;
	BrandProducts: Array<BrandProductModel>
}
