import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
    label: 'BUTTON',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'BUTTON',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'BUTTON',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'BUTTON',
    disabled: true,
};