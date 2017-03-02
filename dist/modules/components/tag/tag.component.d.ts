import { EventEmitter, TemplateRef, ElementRef, Renderer } from '@angular/core';
import { TagModel } from '../helpers/accessor';
import { TagRipple } from './tag-ripple.component';
export declare class TagComponent {
    element: ElementRef;
    renderer: Renderer;
    model: TagModel;
    readonly: boolean;
    removable: boolean;
    editable: boolean;
    template: TemplateRef<any>;
    private displayBy;
    private identifyBy;
    private index;
    onSelect: EventEmitter<TagModel>;
    onRemove: EventEmitter<TagModel>;
    onBlur: EventEmitter<TagModel>;
    onKeyDown: EventEmitter<any>;
    onTagEdited: EventEmitter<TagModel>;
    private editModeActivated;
    private rippleState;
    ripple: TagRipple;
    constructor(element: ElementRef, renderer: Renderer);
    select($event?: MouseEvent): void;
    remove(): void;
    focus(): void;
    keydown(event: KeyboardEvent): void;
    blink(): void;
    toggleEditMode(): void;
    getDisplayValue(item: TagModel): string;
    private getContentEditableText();
    private disableEditMode($event);
    private storeNewValue();
    private isDeleteIconVisible();
    private isRippleVisible();
}
