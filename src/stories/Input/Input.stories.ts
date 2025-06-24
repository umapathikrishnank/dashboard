import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@/components/ui/input"

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter your name",
    type: "text",
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}
export const TextType: Story = {
  args: {
    type: "text",
    placeholder: "Enter your text",
  },
}

export const PasswordType: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
}

export const EmailType: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
  },
}
export const NumberType: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
  },
}
export const SearchType: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
}
export const TelType: Story = {
  args: {
    type: "tel",
    placeholder: "Enter your phone number",
  },
}
export const UrlType: Story = {
  args: {
    type: "url",
    placeholder: "Enter a URL",
  },
}