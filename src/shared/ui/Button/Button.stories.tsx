import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ThemeButton } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary'
  }
}

export const Clear: Story = {
  args: {
    children: 'Clear',
    size: ButtonSize.M,
    theme: ThemeButton.CLEAR
  }
}

export const Background: Story = {
  args: {
    children: 'BACKGROUND',
    size: ButtonSize.M,
    theme: ThemeButton.BACKGROUND
  }
}

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    size: ButtonSize.M,
    square: true
  }
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    size: ButtonSize.M,
    theme: ThemeButton.OUTLINE
  }
}
