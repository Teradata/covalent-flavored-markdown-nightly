export interface IFlavoredListItem {
    line: string;
    sublines?: string[];
}
export declare class TdFlavoredListComponent {
    lines: IFlavoredListItem[];
    dense: boolean;
}
