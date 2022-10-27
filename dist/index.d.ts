/// <reference types="react" />
interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare const obj: {
    test: boolean;
};
declare type Test = {
    title: string;
};

export { Button, Test, obj };
