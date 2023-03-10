/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IhrButton {
        "color": 'primary' | 'accent' | 'light';
        "disabled": boolean;
        "label": string;
        "shape": 'square' | 'round';
        "size": 'small' | 'default' | 'large';
        "type": 'button' | 'reset' | 'submit';
        "variant": 'outlined' | 'contained';
    }
    interface MyComponent {
        /**
          * The age
         */
        "age": string;
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
        "myMethod3": () => Promise<void>;
    }
}
export interface IhrButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIhrButtonElement;
}
declare global {
    interface HTMLIhrButtonElement extends Components.IhrButton, HTMLStencilElement {
    }
    var HTMLIhrButtonElement: {
        prototype: HTMLIhrButtonElement;
        new (): HTMLIhrButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ihr-button": HTMLIhrButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface IhrButton {
        "color"?: 'primary' | 'accent' | 'light';
        "disabled"?: boolean;
        "label"?: string;
        "onClickEvent"?: (event: IhrButtonCustomEvent<any>) => void;
        "shape"?: 'square' | 'round';
        "size"?: 'small' | 'default' | 'large';
        "type"?: 'button' | 'reset' | 'submit';
        "variant"?: 'outlined' | 'contained';
    }
    interface MyComponent {
        /**
          * The age
         */
        "age": string;
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ihr-button": IhrButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ihr-button": LocalJSX.IhrButton & JSXBase.HTMLAttributes<HTMLIhrButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
