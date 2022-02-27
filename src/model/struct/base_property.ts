import { BasePropertyTypes, BasePropetryType } from "./define";

export class BaseProperty {
    private _propertyMap: Map<BasePropetryType, BasePropertyTypes> = new Map<BasePropetryType, BasePropertyTypes>();

    protected setProperty(type: BasePropetryType, value: BasePropertyTypes): void {
        this._propertyMap.set(type, value);
    }

    protected getProperty(type: BasePropetryType): BasePropertyTypes | undefined {
        return this._propertyMap.get(type) ? this._propertyMap.get(type) : undefined;
    }

    public updateProperty() {
        // TODO: update property
    }
}