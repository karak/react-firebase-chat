// missing declarations in @types/storybook__react__demo
declare module '@storybook/react/demo' {
  export class Button extends React.Component<React.HTMLProps<HTMLButtonElement>> {
  }

  export interface WelcomeProps {
    showApp: React.MouseEventHandler<Welcome>;
  }

  export class Welcome extends React.Component<WelcomeProps> {
  }
}
