import React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import theme from '../../lib/theme'

export interface ButtonProps {
    appearance?: 'filled' | 'outline' | 'ghost';
    status?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'control';
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
    onClick?: () => void;
    children: any;
    disabled?: boolean;
    accessoryLeft?: any;
    accessoryRight?: any;
}

const getFontSize = (size: string) => {
    if (size === 'tiny') return '12px'
    if (size === 'small') return '16px'
    if (size === 'medium') return '16px'
    if (size === 'large') return '20px'
    if (size === 'giant') return '24px'
}

const getPadding = (size: string) => {
    if (size === 'tiny') return '6px 12px'
    if (size === 'small') return '8px 16px'
    if (size === 'medium') return '12px 20px'
    if (size === 'large') return '14px 20px'
    if (size === 'giant') return '16px 24px'
}

const FilledButton = styled.button`
    background-color: ${(p: ButtonProps) => theme.colors[p.status][500]};
    color: white;
    border: 2px solid transparent;
    font-weight: bold;
    padding: ${p => getPadding(p.size)};
    font-size: ${p => getFontSize(p.size)};
    border-radius: 4px;
    outline: none;

    &:hover {
        cursor: pointer;
        background-color: ${(p: ButtonProps) => theme.colors[p.status][400]};
    }

    &:active {
        background-color: ${(p: ButtonProps) => theme.colors[p.status][600]};
    }

    &:focus {
        background-color: ${(p: ButtonProps) => theme.colors[p.status][600]};
        border: 2px solid ${(p: ButtonProps) => theme.colors[p.status][700]};
        box-shadow: 0 0 0 2pt rgba(143, 155, 179, 0.16);
    }

    &:disabled {
        background-color: ${transparentize(1 - 0.16, theme.colors.basic[500])};
        color: ${theme.colors.basic[600]};
        cursor: not-allowed;
    }
`

const OutlineButton = styled.button`
    background-color: white;
    color: ${(p: ButtonProps) => theme.colors[p.status][500]};
    font-weight: bold;
    padding: ${p => getPadding(p.size)};
    font-size: ${p => getFontSize(p.size)};
    border: 2px solid ${(p: ButtonProps) => theme.colors[p.status][500]};
    border-radius: 4px;
    outline: none;

    &:hover {
        cursor: pointer;
        background-color: ${(p: ButtonProps) => transparentize(1 - 0.08, theme.colors[p.status][500])};
    }

    &:active {
        background-color: ${(p: ButtonProps) => transparentize(1 - 0.16, theme.colors[p.status][500])};
    }

    &:focus {
        background-color: ${(p: ButtonProps) => transparentize(1 - 0.16, theme.colors[p.status][500])};
        box-shadow: 0 0 0 2pt rgba(143, 155, 179, 0.16);
    }

    &:disabled {
        background-color: ${transparentize(1 - 0.16, theme.colors.basic[500])};
        border: 2px solid ${transparentize(1 - 0.24, theme.colors.basic[500])};
        color: ${theme.colors.basic[600]};
        cursor: not-allowed;
    }
`

const GhostButton = styled.button`
    background-color: transparent;
    color: ${(p: ButtonProps) => theme.colors[p.status][500]};
    font-weight: bold;
    padding: ${p => getPadding(p.size)};
    font-size: ${p => getFontSize(p.size)};
    border: 2px solid transparent;
    border-radius: 4px;
    outline: none;

    &:hover {
        cursor: pointer;
        background-color: ${(p: ButtonProps) => transparentize(1 - 0.08, theme.colors[p.status][500])};
    }

    &:active {
        background-color: ${(p: ButtonProps) => transparentize(1 - 0.16, theme.colors[p.status][500])};
    }

    &:focus {
        background-color: ${(p: ButtonProps) => transparentize(1 - 0.16, theme.colors[p.status][500])};
        box-shadow: 0 0 0 2pt rgba(143, 155, 179, 0.16);
    }

    &:disabled {
        background-color: ${transparentize(1 - 0.16, theme.colors.basic[500])};
        border: 2px solid ${transparentize(1 - 0.24, theme.colors.basic[500])};
        color: ${theme.colors.basic[600]};
        cursor: not-allowed;
    }
`

const Button = ({
    children,
    appearance = 'filled',
    status = 'primary',
    size = 'medium',
    disabled,
    ...props
}: ButtonProps) => {

    if (appearance === 'filled') {
        return (
            <FilledButton size={size} status={status} disabled={disabled} {...props}>
                {children}
            </FilledButton>
        )
    }

    if (appearance === 'outline') {
        return (
            <OutlineButton size={size} status={status} disabled={disabled} {...props}>
                {children}
            </OutlineButton>
        )
    }

    if (appearance === 'ghost') {
        return (
            <GhostButton size={size} status={status} disabled={disabled} {...props}>
                {children}
            </GhostButton>
        )
    }
}

export default Button